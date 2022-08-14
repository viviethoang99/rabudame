import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../data/types/layout.dart';
import '../../util/reponsiveness.dart';
import '../home_screen.dart';

class AppBarWidget extends StatelessWidget {
  const AppBarWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveWidget(
      largeScreen: _LargeScreen(),
      mediumScreen: _IconSmallWidget(),
      smallScreen: _IconSmallWidget(),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: List.generate(
        AppPage.values.length,
        (index) => ButtonAppbarWidget(
          item: AppPage.values[index],
          index: index,
        ),
      ),
    );
  }
}

class ButtonAppbarWidget extends StatelessWidget {
  const ButtonAppbarWidget({
    Key? key,
    required this.item,
    required this.index,
  }) : super(key: key);

  final AppPage item;
  final int index;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => context.read<ScrollIndexCubit>().onTap(index),
      child: Container(
        width: 200,
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: const BoxDecoration(
          color: Colors.black87,
        ),
        margin: const EdgeInsets.only(right: 10, top: 15),
        child: Text(
          item.nameRouter,
          textAlign: TextAlign.center,
          style: GoogleFonts.beVietnamPro(
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}

class _IconSmallWidget extends StatelessWidget {
  const _IconSmallWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 20),
      alignment: Alignment.topRight,
      child: ElevatedButton(
        onPressed: () => Scaffold.of(context).openEndDrawer(),
        style: ElevatedButton.styleFrom(
          shape: const CircleBorder(),
          primary: Colors.white,
          padding: const EdgeInsets.all(20).r,
        ),
        child: const Icon(
          Icons.reorder,
          color: Colors.black87,
        ),
      ),
    );
  }
}
