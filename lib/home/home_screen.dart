import 'package:flutter/material.dart';

import '../util/size_config.dart';
import 'appbar/appbar.dart';
import 'first_banner/first_banner_widget.dart';
import 'footbar/footbar.dart';
import 'intro_widget/intro_widget.dart';
import 'list_book/list_book.dart';
import 'radar_stats_character/presentation/list_card_profile.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      body: Stack(
        children: [
          SingleChildScrollView(
            physics: const ClampingScrollPhysics(),
            child: Column(
              children: const [
                FirstBannerWidget(),
                IntroWidget(),
                ListCardProfileWidget(),
                ListBookWidget(),
                FootBarWidget(),
              ],
            ),
          ),
          // const AppBarWidget(),
        ],
      ),
    );
  }
}
