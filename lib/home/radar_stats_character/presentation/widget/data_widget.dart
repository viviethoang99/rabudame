import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../../data/data.dart';
import 'rabudame_stats.dart';

class DataWidget extends StatelessWidget {
  const DataWidget({
    Key? key,
    required this.profile,
  }) : super(key: key);

  final ProfileModel profile;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CustomTextSpan(
          title: 'Lớp',
          content: profile.classmateToString(),
          characterColor: profile.fromHex(),
        ),
        CustomTextSpan(
          title: 'Ngày sinh',
          content: profile.birthdayToString(),
          characterColor: profile.fromHex(),
        ),
        CustomTextSpan(
          title: 'Tốt nghiệp cấp 2',
          content: profile.middleSchools,
          characterColor: profile.fromHex(),
        ),
        CustomTextSpan(
          title: 'Câu lạc bộ',
          content: profile.club,
          characterColor: profile.fromHex(),
        ),
        CustomTextSpan(
          title: 'Độ phù hợp Rom-Com',
          content: profile.assessSuitability,
          characterColor: profile.fromHex(),
        ),
        RabudameStatsWidget(
          stats: profile.radarStat,
          characterColor: profile.fromHex(),
        ),
      ],
    );
  }
}

class CustomTextSpan extends StatelessWidget {
  const CustomTextSpan({
    Key? key,
    required this.title,
    required this.content,
    required this.characterColor,
  }) : super(key: key);

  final String title;
  final String content;
  final Color characterColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 4),
      margin: const EdgeInsets.symmetric(horizontal: 10),
      width: double.infinity,
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(
            width: 1.0,
            color: Colors.black87,
          ),
        ),
        color: Colors.white,
      ),
      child: RichText(
        textAlign: TextAlign.start,
        text: TextSpan(
          style: GoogleFonts.beVietnamPro(
            fontSize: 17,
            color: characterColor,
            fontWeight: FontWeight.w500,
          ),
          children: <TextSpan>[
            TextSpan(text: title),
            const TextSpan(text: ' : '),
            TextSpan(
              text: content,
              style: GoogleFonts.beVietnamPro(
                color: Colors.black87,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
