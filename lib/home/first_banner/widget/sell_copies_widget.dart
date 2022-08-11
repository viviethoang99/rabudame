import 'package:flutter/material.dart';

import '../../../gen/assets.gen.dart';

class SellCopiesWidget extends StatelessWidget {
  const SellCopiesWidget({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomRight,
      child: Padding(
        padding: const EdgeInsets.all(30),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Assets.background.fourMili.image(width: 170),
            Assets.background.tenMili.image(width: 170),
          ],
        ),
      ),
    );
  }
}
