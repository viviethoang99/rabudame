import 'package:go_router/go_router.dart';

import 'app/app.dart';
import 'bootstrap.dart';

void main() {
  GoRouter.setUrlPathStrategy(UrlPathStrategy.path);
  bootstrap(() => const App());
}
