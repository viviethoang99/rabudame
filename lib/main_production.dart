import 'package:flutter/material.dart';
// ignore: depend_on_referenced_packages
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

import 'app/app.dart' deferred as app;

void main() async {
  usePathUrlStrategy();
  await app.loadLibrary();
  runApp(app.App());
}
