// ignore: depend_on_referenced_packages
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

import 'app/app.dart' deferred as app;
import 'bootstrap.dart';

void main() async {
  usePathUrlStrategy();
  await app.loadLibrary();
  await bootstrap(app.App.new);
}
