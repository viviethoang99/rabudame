import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../gen/assets.gen.dart';
import '../../util/content.dart';
import '../../util/reponsiveness.dart';

class IntroWidget extends StatelessWidget {
  const IntroWidget({Key? key}) : super(key: key);

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
      width: double.infinity,
      padding: const EdgeInsets.all(50),
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: ColorFilter.mode(
            Colors.red.withOpacity(0.2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          fit: BoxFit.fitHeight,
          alignment: Alignment.centerLeft,
        ),
      ),
      child: Column(
        children: [
          Container(
            color: Colors.black,
            padding: const EdgeInsets.symmetric(vertical: 20),
            width: 1000,
            child: Center(
              child: Text(
                'Tóm tắt',
                style: GoogleFonts.beVietnamPro(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          Container(
            width: 1000,
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.black,
                width: 2,
              ),
              color: const Color(0XFFfcfcff),
              image: DecorationImage(
                image: AssetImage(Assets.background.arasuji.path),
                fit: BoxFit.fitHeight,
                alignment: Alignment.centerRight,
              ),
            ),
            child: const _TextWidget(),
          ),
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
      padding: const EdgeInsets.all(50).r,
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: ColorFilter.mode(
            Colors.red.withOpacity(0.2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          fit: BoxFit.fitHeight,
          alignment: Alignment.centerLeft,
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            color: Colors.black,
            padding: const EdgeInsets.symmetric(vertical: 20),
            width: 1000,
            child: Center(
              child: Text(
                'Tóm tắt',
                style: GoogleFonts.beVietnamPro(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          Container(
            width: 1000,
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.black,
                width: 2,
              ),
              color: const Color(0XFFfcfcff),
              image: DecorationImage(
                image: AssetImage(Assets.background.arasuji.path),
                fit: BoxFit.fitHeight,
                alignment: ResponsiveWidget.isMediumScreen(context)
                    ? Alignment.centerRight
                    : const Alignment(0.5, 0),
              ),
            ),
            child: const _TextWidget(),
          ),
        ],
      ),
    );
  }
}

class _TextWidget extends StatelessWidget {
  const _TextWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(36).r,
      child: Text(
        intro,
        style: GoogleFonts.beVietnamPro(
          fontSize: 15,
          height: 1.4,
          letterSpacing: 0.9,
          background: Paint()..color = Colors.white.withOpacity(0.7),
        ),
      ),
    );
  }
}
