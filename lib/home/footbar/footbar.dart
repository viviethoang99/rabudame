import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../gen/assets.gen.dart';
import '../../util/reponsiveness.dart';

final urlGithub = Uri.parse(
  'https://github.com/viviethoang99/rabudame/issues/new',
);

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
            'with the content providers available)',
            style: GoogleFonts.beVietnamPro(
              color: Colors.white,
              fontSize: 15,
            ),
            textAlign: TextAlign.center,
          ),
          Padding(
            padding: const EdgeInsets.all(10),
            child: GestureDetector(
              onTap: () => launchUrl(urlGithub),
              child: Text(
                'Góp ý',
                style: GoogleFonts.beVietnamPro(
                  fontSize: 17,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
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
      color: const Color(0XFFfa98a2),
      padding: const EdgeInsets.all(20),
      child: Column(
        children: [
          Text(
            'Nhà phát triển không có bất kì liên kết gì '
            'với nhà cung cấp nội dung.\n'
            '(The developer does not have any affiliation '
            'with the content providers available)',
            style: GoogleFonts.beVietnamPro(
              color: Colors.white,
              fontSize: 15,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 10),
          Padding(
            padding: const EdgeInsets.all(10),
            child: GestureDetector(
              onTap: () => launchUrl(urlGithub),
              child: Text(
                'Góp ý',
                style: GoogleFonts.beVietnamPro(
                  fontSize: 17,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          const SizedBox(height: 10),
          Assets.background.logo.image(
            width: 200,
          ),
        ],
      ),
    );
  }
}
