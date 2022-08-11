import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../gen/assets.gen.dart';
import '../../../util/size_config.dart';

class LogoWidget extends StatelessWidget {
  const LogoWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: SizeConfig.screenHeight,
      alignment: Alignment.bottomLeft,
      padding: EdgeInsets.only(
        bottom: 100,
        left: 0.1.sw,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Assets.background.logo.image(width: 730),
          const SizedBox(height: 30),
          Padding(
            padding: const EdgeInsets.only(left: 80),
            child: Assets.background.author.image(width: 250),
          ),
        ],
      ),
    );
  }
}
