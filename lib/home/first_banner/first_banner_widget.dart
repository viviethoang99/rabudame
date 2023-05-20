import 'package:flutter/material.dart';

import '../../gen/assets.gen.dart';
import '../../util/reponsiveness.dart';
import '../../util/size_config.dart';
import 'widget/character_widget.dart';
import 'widget/logo_widget.dart';
import 'widget/sell_copies_widget.dart';

class FirstBannerWidget extends StatelessWidget {
  const FirstBannerWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveWidget(
      largeScreen: _LargeScreen(),
      mediumScreen: _MediumScreen(),
      smallScreen: _SmallScreen(),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: SizeConfig.screenHeight,
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: const ColorFilter.mode(
            Color(0XFFfa98a2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          fit: BoxFit.fitHeight,
          alignment: Alignment.centerLeft,
          filterQuality: FilterQuality.high,
        ),
      ),
      child: const Stack(
        children: [
          CharacterWidget(),
          SellCopiesWidget(),
          LogoWidget(),
        ],
      ),
    );
  }
}

class _MediumScreen extends StatelessWidget {
  const _MediumScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: const ColorFilter.mode(
            Color(0XFFfa98a2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          fit: BoxFit.fitHeight,
          alignment: Alignment.centerLeft,
          filterQuality: FilterQuality.high,
        ),
      ),
      height: SizeConfig.screenHeight,
      child: const Stack(
        children: [
          CharacterWidget(),
          SellCopiesWidget(),
          LogoWidget(),
        ],
      ),
    );
  }
}

class _SmallScreen extends StatelessWidget {
  const _SmallScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: const ColorFilter.mode(
            Color(0XFFfa98a2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          fit: BoxFit.fitHeight,
          alignment: Alignment.centerLeft,
          filterQuality: FilterQuality.high,
        ),
      ),
      height: SizeConfig.screenHeight,
      child: const Stack(
        children: [
          CharacterWidget(),
          LogoWidget(),
        ],
      ),
    );
  }
}
