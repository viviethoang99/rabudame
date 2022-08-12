import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:scroll_to_index/scroll_to_index.dart';

import '../data/types/layout.dart';
import '../util/size_config.dart';
import 'appbar/appbar.dart';
import 'first_banner/first_banner_widget.dart';
import 'footbar/footbar.dart';
import 'intro_widget/intro_widget.dart';
import 'list_book/list_book.dart';
import 'radar_stats_character/presentation/list_card_profile.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late final AutoScrollController controller;

  @override
  void initState() {
    controller = AutoScrollController();
    super.initState();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  void onTapFunction(BuildContext context, int state) {
    controller.scrollToIndex(state, preferPosition: AutoScrollPosition.begin);
  }

  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return BlocProvider<ScrollIndexCubit>(
      create: (context) => ScrollIndexCubit(),
      child: BlocConsumer<ScrollIndexCubit, int>(
        listener: onTapFunction,
        builder: (context, _) {
          return Scaffold(
            endDrawer: Drawer(
              backgroundColor: Colors.white70,
              child: ListView(
                children: List.generate(
                  AppPage.values.length,
                  (index) => ButtonAppbarWidget(
                    item: AppPage.values[index],
                    index: index,
                  ),
                ),
              ),
            ),
            body: Stack(
              children: [
                ListView(
                  physics: const ClampingScrollPhysics(),
                  controller: controller,
                  children: [
                    const FirstBannerWidget(),
                    AutoScrollTag(
                      key: ValueKey('$IntroWidget'),
                      controller: controller,
                      index: 0,
                      child: const IntroWidget(),
                    ),
                    AutoScrollTag(
                      key: ValueKey('$ListCardProfileWidget'),
                      controller: controller,
                      index: 1,
                      child: const ListCardProfileWidget(),
                    ),
                    AutoScrollTag(
                      key: ValueKey('$ListBookWidget'),
                      controller: controller,
                      index: 2,
                      child: const ListBookWidget(),
                    ),
                    const FootBarWidget(),
                  ],
                ),
                const AppBarWidget(),
              ],
            ),
          );
        },
      ),
    );
  }
}

class ScrollIndexCubit extends Cubit<int> {
  ScrollIndexCubit() : super(-1);

  void onTap(int index) => emit(index);
}
