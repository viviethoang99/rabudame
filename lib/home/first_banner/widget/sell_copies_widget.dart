import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import '../../../gen/assets.gen.dart';

class SellCopiesWidget extends StatelessWidget {
  const SellCopiesWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.bottomRight,
      child: Padding(
        padding: const EdgeInsets.all(30),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Assets.background.fourMili.image(width: 130.h),
            Assets.background.tenMili.image(width: 130.h),
          ],
        ),
      ),
    );
  }
}
