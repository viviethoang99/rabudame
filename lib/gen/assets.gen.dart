/// GENERATED CODE - DO NOT MODIFY BY HAND
/// *****************************************************
///  FlutterGen
/// *****************************************************

// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: directives_ordering,unnecessary_import

import 'package:flutter/widgets.dart';

class $AssetsBackgroundGen {
  const $AssetsBackgroundGen();

  /// File path: assets/background/arasuji.gif
  AssetGenImage get arasuji =>
      const AssetGenImage('assets/background/arasuji.gif');

  /// File path: assets/background/author.png
  AssetGenImage get author =>
      const AssetGenImage('assets/background/author.png');

  /// File path: assets/background/ayano.png
  AssetGenImage get ayano => const AssetGenImage('assets/background/ayano.png');

  /// File path: assets/background/background.png
  AssetGenImage get background =>
      const AssetGenImage('assets/background/background.png');

  /// File path: assets/background/four_mili.png
  AssetGenImage get fourMili =>
      const AssetGenImage('assets/background/four_mili.png');

  /// File path: assets/background/logo.png
  AssetGenImage get logo => const AssetGenImage('assets/background/logo.png');

  /// File path: assets/background/tachie.png
  AssetGenImage get tachie =>
      const AssetGenImage('assets/background/tachie.png');

  /// File path: assets/background/ten_mili.png
  AssetGenImage get tenMili =>
      const AssetGenImage('assets/background/ten_mili.png');
}

class $AssetsJsonGen {
  const $AssetsJsonGen();

  /// File path: assets/json/data.json
  String get data => 'assets/json/data.json';
}

class Assets {
  Assets._();

  static const $AssetsBackgroundGen background = $AssetsBackgroundGen();
  static const $AssetsJsonGen json = $AssetsJsonGen();
}

class AssetGenImage {
  const AssetGenImage(this._assetName);

  final String _assetName;

  Image image({
    Key? key,
    AssetBundle? bundle,
    ImageFrameBuilder? frameBuilder,
    ImageErrorWidgetBuilder? errorBuilder,
    String? semanticLabel,
    bool excludeFromSemantics = false,
    double? scale,
    double? width,
    double? height,
    Color? color,
    Animation<double>? opacity,
    BlendMode? colorBlendMode,
    BoxFit? fit,
    AlignmentGeometry alignment = Alignment.center,
    ImageRepeat repeat = ImageRepeat.noRepeat,
    Rect? centerSlice,
    bool matchTextDirection = false,
    bool gaplessPlayback = false,
    bool isAntiAlias = false,
    String? package,
    FilterQuality filterQuality = FilterQuality.low,
    int? cacheWidth,
    int? cacheHeight,
  }) {
    return Image.asset(
      _assetName,
      key: key,
      bundle: bundle,
      frameBuilder: frameBuilder,
      errorBuilder: errorBuilder,
      semanticLabel: semanticLabel,
      excludeFromSemantics: excludeFromSemantics,
      scale: scale,
      width: width,
      height: height,
      color: color,
      opacity: opacity,
      colorBlendMode: colorBlendMode,
      fit: fit,
      alignment: alignment,
      repeat: repeat,
      centerSlice: centerSlice,
      matchTextDirection: matchTextDirection,
      gaplessPlayback: gaplessPlayback,
      isAntiAlias: isAntiAlias,
      package: package,
      filterQuality: filterQuality,
      cacheWidth: cacheWidth,
      cacheHeight: cacheHeight,
    );
  }

  String get path => _assetName;

  String get keyName => _assetName;
}
