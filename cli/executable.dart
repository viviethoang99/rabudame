// ignore_for_file: depend_on_referenced_packages

import 'package:args/command_runner.dart';

import 'web_optimize.dart';

void main(List<String> arguments) {
  CommandRunner('cli', 'cli description')
    ..addCommand(WebOptimizeCommand())
    ..run(arguments);
}
