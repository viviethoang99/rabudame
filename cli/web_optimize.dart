// ignore_for_file: depend_on_referenced_packages

import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:args/command_runner.dart';
import 'package:crypto/crypto.dart' as crypto;
import 'package:html/dom.dart';
import 'package:html/parser.dart' show parse;
import 'package:path/path.dart' as path;

class WebOptimizeCommand extends Command<void> {
  WebOptimizeCommand() {
    argParser.addOption(
      'assetBase',
      help: 'asset base url, end with /,eq: http://192.168.0.1:1111/',
      mandatory: true,
    );
  }

  @override
  String get description => 'Web optimize tool';

  @override
  String get name => 'webOptimize';

  /// Đường dẫn thư mục cli
  final String webAssetDir = '${Directory.current.path}/cli';

  /// Đường dẫn thư mục build web
  final String webArtifactsOutputDir = '${Directory.current.path}/build/web';

  /// Js Manifest file
  Map<String, String> jsManifest = <String, String>{};

  /// Đường dẫn tới cdn
  String get assetBase => argResults!['assetBase'];

  @override
  FutureOr<void> run() async {
    final outputDir = Directory(webArtifactsOutputDir);

    // Nếu thư mục không tồn tại thì thoát
    if (!outputDir.existsSync()) exit(1);

    // Tìm file main.dart.js và chia nhỏ tệp.
    for (var file in outputDir.listSync().whereType<File>()) {
      if (path.basename(file.path) == 'main.dart.js') {
        await _splitMainDartJS(file);
      }
    }

    _hashAssets();

    _cdnAssets();

    _injectToHtml();

    _replaceFlutterJS();
  }

  /// Chia nhỏ file main.dart.js
  Future<void> _splitMainDartJS(File file) async {
    // Tạo file nhỏ hơn
    Future<bool> writeSingleFile({
      required File file,
      required String filename,
      required int startIndex,
      required endIndex,
    }) {
      final completer = Completer<bool>();
      final f = File(path.join(file.parent.path, filename));
      if (f.existsSync()) {
        f.deleteSync();
      }
      final raf = f.openSync(mode: FileMode.write);
      final inputStream = file.openRead(startIndex, endIndex);
      inputStream.listen(
        raf.writeFromSync,
        onDone: () {
          raf.flushSync();
          raf.closeSync();
          completer.complete(true);
        },
        onError: (dynamic data) {
          raf.flushSync();
          raf.closeSync();
          completer.completeError(data);
        },
      );
      return completer.future;
    }

    const totalChunk = 6;
    final bytes = file.readAsBytesSync();
    final chunkSize = (bytes.length / totalChunk).ceil();
    final futures = List<Future<bool>>.generate(
      totalChunk,
      (int index) {
        return writeSingleFile(
          file: file,
          filename: 'main.dart_$index.js',
          startIndex: index * chunkSize,
          endIndex: (index + 1) * chunkSize,
        );
      },
    );

    await Future.wait(futures);

    /// Xoá file main.dart.js
    file.deleteSync();
  }

  /// Hash data. Luồng logic:
  /// - Tìm ảnh, font và file js
  /// - Lấy mã hash
  /// - Quy tắc đặt tên [name].[hash].[extension]
  void _hashAssets() {
    /// md5
    String md5(File file) {
      final bytes = file.readAsBytesSync();
      // Lấy 8 số đầu
      final md5Hash = crypto.md5.convert(bytes).toString().substring(0, 8);

      // Đổi tên file
      final basename = path.basenameWithoutExtension(file.path);
      final extension = path.extension(file.path);
      // TODO Không đọc được file json ???
      if (extension == '.json') {
        return '$basename$extension';
      }
      return '$basename.$md5Hash$extension';
    }

    /// Đổi tên
    String replace(
      Match match,
      File file,
      String key,
      Map<String, String> hashFiles,
    ) {
      // Dùng mã hash cho tệp
      final filename = md5(file);
      final dirname = path.dirname(key);
      final newKey = path.join(dirname, filename);

      // Lấy đường dẫn
      final newPath = path.join(path.dirname(file.path), filename);
      hashFiles[file.path] = newPath;

      return '${match[1]}$newKey${match[3]}';
    }

    // Đọc file AssetManifest
    final assetManifest =
        File('$webArtifactsOutputDir/assets/AssetManifest.json');
    var assetManifestContent = assetManifest.readAsStringSync();

    // Đọc file FontManifest
    final fontManifest =
        File('$webArtifactsOutputDir/assets/FontManifest.json');
    var fontManifestContent = fontManifest.readAsStringSync();

    // Xử lý các file trong thư mục assets
    final assetsDir = Directory(webArtifactsOutputDir);
    var hashFiles = <String, String>{};
    assetsDir
        .listSync(recursive: true)
        .whereType<File>() // Chỉ lấy file, không lấy thư mục
        .where((File file) => !path.basename(file.path).startsWith('.'))
        .forEach((File file) {
      if (RegExp(r'main.dart(.*)\.js$').hasMatch(file.path)) {
        // Đổi tên các file con main.dart.js
        final filename = md5(file);
        hashFiles[file.path] = path.join(path.dirname(file.path), filename);
        jsManifest[path.basename(file.path)] = filename;
      }

      if (file.path.contains('$webArtifactsOutputDir/assets')) {
        final key = path.relative(
          file.path,
          from: '$webArtifactsOutputDir/assets',
        );
        // Đổi tên file AssetManifest
        assetManifestContent = assetManifestContent.replaceAllMapped(
          RegExp('(.*)($key)(.*)'),
          (Match match) => replace(match, file, key, hashFiles),
        );
        // Đổi tên file FontManifest
        fontManifestContent = fontManifestContent.replaceAllMapped(
          RegExp('(.*)($key)(.*)'),
          (Match match) => replace(match, file, key, hashFiles),
        );
      }
    });

    // Đổi tên file
    hashFiles.forEach((String key, String value) {
      File(key).renameSync(value);
    });

    // Lưu lại
    assetManifest.writeAsStringSync(assetManifestContent);
    fontManifest.writeAsStringSync(fontManifestContent);
  }

  /// Các file CDN
  void _cdnAssets() {
    Directory(webArtifactsOutputDir)
        .listSync(recursive: true)
        .whereType<File>()
        .forEach((File file) {
      final partPath = path.relative(file.path, from: webArtifactsOutputDir);
      final filePath =
          path.join('${Directory.current.path}/build/cdn', partPath);
      File(filePath).createSync(recursive: true);
      file.copySync(filePath);
    });
  }

  /// Thêm script vào HTML
  void _injectToHtml() {
    final file = File('$webArtifactsOutputDir/index.html');
    final contents = file.readAsStringSync();
    final document = parse(contents);

    /// Thêm thẻ meta
    final metas = document.getElementsByTagName('meta');
    final headElement = document.head;
    if (headElement != null) {
      final meta = Element.tag('meta');
      meta.attributes['name'] = 'assetBase';
      meta.attributes['content'] = assetBase;

      if (metas.isNotEmpty) {
        final lastMeta = metas.last;
        lastMeta.append(Text('\n'));
        lastMeta.append(Comment('Add content baseAsset'));
        lastMeta.append(Text('\n'));
        lastMeta.append(meta);
      } else {
        headElement.append(Comment('Add content baseAsset'));
        headElement.append(Text('\n'));
        headElement.append(meta);
        headElement.append(Text('\n'));
      }
    }

    /// Script
    var dartDeferredLibraryLoader = r'''
    // auto-generate, dont edit!!!!!!
    var assetBase = null;
    var jsManifest = null;
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('===>', uri, successCallback, errorCallback, loadId);
      
      let src;
      try {
        const url = new URL(uri);
        src = `${assetBase}${jsManifest[url.pathname.substring(1)]}`;
      } catch (e) {
        src = `${assetBase}${jsManifest[uri]}`;
      }
      
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    '''
        .replaceAll(
          RegExp('var assetBase = null;'),
          'var assetBase = "$assetBase";',
        )
        .replaceAll(
          RegExp('var jsManifest = null;'),
          'var jsManifest = ${jsonEncode(jsManifest)};',
        );
    final scripts = document.getElementsByTagName('script');
    // Thêm file script
    var isInjected = false;
    for (var i = 0; i < scripts.length; i++) {
      final element = scripts[i];
      if (element.text.contains(RegExp(r'var serviceWorkerVersion'))) {
        element.text = '${element.text}\n$dartDeferredLibraryLoader';
        isInjected = true;
        break;
      }
    }
    if (!isInjected) {
      final headElement = document.head;
      if (headElement != null) {
        final script = Element.tag('script');
        script.text = '\n$dartDeferredLibraryLoader';

        if (scripts.length > 1) {
          final firstScript = scripts.first;
          headElement.insertBefore(script, firstScript);
          headElement.insertBefore(Text('\n'), firstScript);
        } else {
          headElement.append(script);
          headElement.append(Text('\n'));
        }
      }
    }

    // Ghi vào file
    file.writeAsStringSync(document.outerHtml);
  }

  /// Thay file flutter.js thành file trong cli
  void _replaceFlutterJS() {
    final contents = File('$webAssetDir/flutter.js').readAsStringSync();
    File('$webArtifactsOutputDir/flutter.js').writeAsStringSync(contents);
  }
}
