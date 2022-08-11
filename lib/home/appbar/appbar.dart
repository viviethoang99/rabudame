import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../data/types/layout.dart';
import '../../util/reponsiveness.dart';

class AppBarWidget extends StatelessWidget {
  const AppBarWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveWidget(
      largeScreen: _LargeScreen(),
      mediumScreen: SizedBox.shrink(),
      smallScreen: SizedBox.shrink(),
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
        ),
      ),
    );
  }
}

class ButtonAppbarWidget extends StatelessWidget {
  const ButtonAppbarWidget({Key? key, required this.item}) : super(key: key);

  final AppPage item;

  @override
  Widget build(BuildContext context) {
    return Container(
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
    );
  }
}
