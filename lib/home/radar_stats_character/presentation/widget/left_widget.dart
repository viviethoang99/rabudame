import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../../data/models/profile_model.dart';
import 'avatar_widget.dart';
import 'name_widget.dart';

class LeftWidget extends StatelessWidget {
  const LeftWidget({
    Key? key,
    required this.profile,
  }) : super(key: key);

  final ProfileModel profile;

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(
        maxWidth: 350,
      ),
      child: Column(
        children: [
          if (profile.radarStat == null)
            NameWidget(
              names: profile.splitName,
              color: profile.fromHex(),
            ),
          if (profile.radarStat == null)
            const SizedBox(
              height: 20,
            ),
          AvatarWidget(
            avatar: profile.avatar ?? profile.urlImage,
            urlImage: profile.urlImage,
          ),
          const SizedBox(
            height: 20,
          ),
          _ContentWidget(
            title: 'Vai trò',
            content: profile.role,
          ),
          const SizedBox(
            height: 20,
          ),
          _ContentWidget(
            title: 'Thông tin',
            content: profile.profile,
          ),
        ],
      ),
    );
  }
}

class _ContentWidget extends StatelessWidget {
  const _ContentWidget({
    Key? key,
    required this.title,
    required this.content,
  }) : super(key: key);

  final String title;
  final String content;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _TitleWidget(title: title),
        const SizedBox(width: 15),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(top: 4),
            child: Text(
              content,
              style: GoogleFonts.beVietnamPro(),
            ),
          ),
        ),
      ],
    );
  }
}

class _TitleWidget extends StatelessWidget {
  const _TitleWidget({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 80,
      padding: const EdgeInsets.symmetric(vertical: 4),
      decoration: const BoxDecoration(
        color: Colors.black,
      ),
      child: Text(
        title,
        style: GoogleFonts.beVietnamPro(
          color: Colors.white,
        ),
        textAlign: TextAlign.center,
      ),
    );
  }
}
