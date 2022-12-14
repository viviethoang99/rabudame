import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../../util/reponsiveness.dart';

class TitleWidget extends StatelessWidget {
  const TitleWidget({
    Key? key,
    required this.title,
    this.width,
  }) : super(key: key);

  final String title;
  final double? width;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width ?? double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 4),
      decoration: const BoxDecoration(
        color: Colors.black,
      ),
      child: Text(
        title,
        style: GoogleFonts.beVietnamPro(
          color: Colors.white,
          fontSize: ResponsiveWidget.isSmallScreen(context) ? 16 : null,
          fontWeight: ResponsiveWidget.isSmallScreen(context)
              ? FontWeight.w600
              : FontWeight.w400,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}
