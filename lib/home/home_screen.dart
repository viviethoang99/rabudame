import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:scroll_to_index/scroll_to_index.dart';

import '../data/data.dart';
import '../util/size_config.dart';
import 'appbar/appbar.dart';
import 'first_banner/first_banner_widget.dart';
import 'footbar/footbar.dart';
import 'intro_widget/intro_widget.dart';
import 'list_book/application/list_book/list_book_cubit.dart';
import 'list_book/publish_book_screen.dart';
import 'radar_stats_character/application/radar_stats_cubit/radar_stats_cubit.dart';
import 'radar_stats_character/presentation/list_card_profile.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late final AutoScrollController controller;
  late final LocalDataSource _localDataSource;

  @override
  void initState() {
    controller = AutoScrollController();
    _localDataSource = const LocalDataSource();
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
    return MultiBlocProvider(
      providers: [
        BlocProvider<ScrollIndexCubit>(
          create: (context) => ScrollIndexCubit(),
        ),
        BlocProvider<RadarStatsCubit>(
            create: (context) => RadarStatsCubit(_localDataSource)..getData()),
        BlocProvider<ListBookCubit>(
          create: (context) => ListBookCubit(_localDataSource)..getData(),
        )
      ],
      child: BlocConsumer<ScrollIndexCubit, int>(
        listener: onTapFunction,
        builder: (context, _) {
          return Scaffold(
            endDrawer: Drawer(
              backgroundColor: const Color.fromARGB(179, 103, 85, 85),
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
                  shrinkWrap: true,
                  physics: const BouncingScrollPhysics(),
                  controller: controller,
                  children: [
                    const FirstBannerWidget(),
                    AutoScrollTag(
                      key: const ValueKey('IntroWidget'),
                      controller: controller,
                      index: 0,
                      child: const IntroWidget(),
                    ),
                    AutoScrollTag(
                      key: const ValueKey('ListCardProfileWidget'),
                      controller: controller,
                      index: 1,
                      child: const ListCardProfileWidget(),
                    ),
                    AutoScrollTag(
                      key: const ValueKey('PublishBookScreen'),
                      controller: controller,
                      index: 2,
                      child: const PublishBookScreen(),
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
