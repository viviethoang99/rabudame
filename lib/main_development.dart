// ignore: depend_on_referenced_packages
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

import 'app/app.dart';
import 'bootstrap.dart';

void main() {
  usePathUrlStrategy();
  bootstrap(() => const App());
}
