import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../gen/assets.gen.dart';

class LogoWidget extends StatelessWidget {
  const LogoWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 0.45.sh,
      left: 0.05.sw,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 0.75.sh,
            constraints: BoxConstraints(
              maxWidth: 0.9.sw,
            ),
            child: Assets.background.logo.image(),
          ),
          const SizedBox(height: 30),
          Container(
            width: 0.4.sh,
            padding: const EdgeInsets.only(left: 80).r,
            child: Assets.background.author.image(),
          ),
        ],
      ),
    );
  }
}
