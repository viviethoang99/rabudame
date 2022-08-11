import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../gen/assets.gen.dart';
import '../../../util/reponsiveness.dart';

class CharacterWidget extends StatelessWidget {
  const CharacterWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: _LargeScreen(left: 0.4.sw),
      mediumScreen: _LargeScreen(left: 0.15.sw),
      smallScreen: const _SmallScreen(),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({
    Key? key,
    required this.left,
  }) : super(key: key);

  final double left;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
          top: 0.16.sh,
          left: left + 450,
          bottom: -0.2.sh,
          child: SizedBox(
            height: 0.9.sh,
            child: Assets.background.tachie.image(),
          ),
        ),
        Positioned(
          top: -0.05.sh,
          left: left,
          child: Container(
            padding: const EdgeInsets.only(right: 300),
            height: 1.3.sh,
            child: Assets.background.ayano.image(
              alignment: const Alignment(0, 0.9),
            ),
          ),
        ),
      ],
    );
  }
}

class _SmallScreen extends StatelessWidget {
  const _SmallScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
          top: 0.16.sh,
          left: 350,
          bottom: -0.2.sh,
          child: SizedBox(
            child: Assets.background.tachie.image(),
          ),
        ),
        Positioned(
          top: -0.05.sh,
          left: -100,
          child: SizedBox(
            height: 1.3.sh,
            child: Assets.background.ayano.image(
              alignment: const Alignment(0, 0.9),
            ),
          ),
        ),
      ],
    );
  }
}
