import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../data/models/profile_model.dart';
import '../../../util/reponsiveness.dart';
import 'widget/avatar_widget.dart';
import 'widget/data_widget.dart';
import 'widget/left_widget.dart';
import 'widget/name_widget.dart';
import 'widget/titile_widget.dart';

class CardProfileWidget extends StatelessWidget {
  const CardProfileWidget({
    Key? key,
    required this.profile,
  }) : super(key: key);

  final ProfileModel profile;

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      key: ValueKey('CHARACTER_${profile.name.replaceAll('_', ' ')}'),
      largeScreen: _LargeScreen(profile: profile),
      smallScreen: _SmallScreen(profile: profile),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({Key? key, required this.profile}) : super(key: key);

  final ProfileModel profile;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 30),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          LeftWidget(
            profile: profile,
          ),
          if (profile.radarStat != null) const SizedBox(width: 10),
          if (profile.radarStat != null)
            SizedBox(
              width: 350,
              child: Column(
                children: [
                  NameWidget(
                    names: profile.splitName,
                    color: profile.fromHex(),
                  ),
                  const SizedBox(height: 20),
                  DataWidget(profile: profile),
                ],
              ),
            )
        ],
      ),
    );
  }
}

class _SmallScreen extends StatelessWidget {
  const _SmallScreen({Key? key, required this.profile}) : super(key: key);

  final ProfileModel profile;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 15,
        vertical: 30,
      ),
      child: Column(
        children: [
          NameWidget(
            names: profile.splitName,
            color: profile.fromHex(),
          ),
          const SizedBox(height: 20),
          AvatarWidget(
            urlImage: profile.urlImage,
            avatar: profile.avatar ?? profile.urlImage,
          ),
          const SizedBox(height: 20),
          const TitleWidget(title: 'Vai trò'),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 10),
            child: Text(
              profile.role,
              style: GoogleFonts.beVietnamPro(),
            ),
          ),
          const TitleWidget(title: 'Profile'),
          Padding(
            padding: const EdgeInsets.all(10),
            child: Text(
              profile.profile,
              style: GoogleFonts.beVietnamPro(
                fontSize: 15,
              ),
            ),
          ),
          if (profile.radarStat != null) const TitleWidget(title: 'Dữ liệu'),
          if (profile.radarStat != null)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: DataWidget(profile: profile),
            )
        ],
      ),
    );
  }
}
