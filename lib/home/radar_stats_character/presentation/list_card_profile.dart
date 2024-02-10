import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../gen/assets.gen.dart';
import '../../../util/reponsiveness.dart';
import '../application/radar_stats_cubit/radar_stats_cubit.dart';
import 'card_profile.dart';

class ListCardProfileWidget extends StatelessWidget {
  const ListCardProfileWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0XFFfa98a2),
        image: DecorationImage(
          colorFilter: const ColorFilter.mode(
            Color(0XFFfa98a2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          repeat: ImageRepeat.repeat,
          alignment: Alignment.topCenter,
        ),
      ),
      width: double.infinity,
      padding: const EdgeInsets.symmetric(
        vertical: 40,
        horizontal: 20,
      ).r,
      child: BlocBuilder<RadarStatsCubit, RadarStatsState>(
        builder: (context, state) {
          if (state is RadarStatsSucces) {
            return ResponsiveWidget(
              largeScreen: _LargeScreen(state: state),
              smallScreen: _SmallScreen(state: state),
            );
          }
          return const SizedBox.shrink();
        },
      ),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({Key? key, required this.state}) : super(key: key);

  final RadarStatsSucces state;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        constraints: const BoxConstraints(maxWidth: 1000),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(
            color: Colors.black,
            width: 2,
          ),
        ),
        child: Column(
          children: [
            Container(
              width: 1000,
              decoration: const BoxDecoration(
                color: Colors.black,
              ),
              padding: const EdgeInsets.symmetric(vertical: 20),
              margin: const EdgeInsets.only(bottom: 15),
              child: Text(
                'Nhân vật',
                style: GoogleFonts.beVietnamPro(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
            ),
            ...List.generate(
              state.listProfile.length,
              (index) => CardProfileWidget(
                profile: state.listProfile[index],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SmallScreen extends StatelessWidget {
  const _SmallScreen({Key? key, required this.state}) : super(key: key);

  final RadarStatsSucces state;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(
          color: Colors.black,
          width: 2,
        ),
      ),
      child: Column(
        children: [
          Container(
            width: double.infinity,
            decoration: const BoxDecoration(
              color: Colors.black,
            ),
            padding: const EdgeInsets.symmetric(vertical: 20),
            margin: const EdgeInsets.only(bottom: 15),
            child: Text(
              'Nhân vật',
              style: GoogleFonts.beVietnamPro(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
          ),
          ...List.generate(
            state.listProfile.length,
            (index) => CardProfileWidget(
              profile: state.listProfile[index],
            ),
          ),
        ],
      ),
    );
  }
}
