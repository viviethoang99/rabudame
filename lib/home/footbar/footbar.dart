import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../gen/assets.gen.dart';
import '../../util/reponsiveness.dart';

class FootBarWidget extends StatelessWidget {
  const FootBarWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveWidget(
      largeScreen: _LargeScreen(),
      mediumScreen: _SmallScreen(),
      smallScreen: _SmallScreen(),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0XFFfa98a2),
      padding: const EdgeInsets.symmetric(vertical: 20),
      height: 100,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Assets.background.logo.image(
            width: 200,
          ),
          Text(
            'Nhà phát triển không có bất kì liên kết gì '
            'với nhà cung cấp nội dung.\n'
            '(The developer does not have any affiliation '
            'with the content providers available.)',
            style: GoogleFonts.beVietnamPro(
              color: Colors.white,
              fontSize: 15,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox.shrink()
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
      width: double.infinity,
      color: const Color(0XFFfa98a2),
      padding: const EdgeInsets.all(20),
      child: Column(
        children: [
          Text(
            'Nhà phát triển không có bất kì liên kết gì '
            'với nhà cung cấp nội dung.\n'
            '(The developer does not have any affiliation '
            'with the content providers available.)',
            style: GoogleFonts.beVietnamPro(
              color: Colors.white,
              fontSize: 15,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 20),
          Assets.background.logo.image(
            width: 200,
          ),
        ],
      ),
    );
  }
}
