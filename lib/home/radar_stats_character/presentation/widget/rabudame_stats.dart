import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../../data/data.dart';
import '../../../radar_chart/radar_chart.dart';

class RabudameStatsWidget extends StatelessWidget {
  const RabudameStatsWidget({
    Key? key,
    this.stats,
    required this.characterColor,
  }) : super(key: key);

  final ChartRadarModel? stats;
  final Color characterColor;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (stats != null) {
          if (stats!.isUnknown) {
            return SizedBox(
              height: constraints.maxWidth,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  RadarChart(
                    values: const [0, 0, 0, 0, 0],
                    labels: const [
                      'Ngoại hình',
                      'Năng lực',
                      'Tính cách',
                      'Hành vi',
                      'Lời nói',
                    ],
                    maxValue: 100,
                    fillColor: characterColor,
                    chartRadiusFactor: 0.7,
                  ),
                  Container(
                    decoration: const BoxDecoration(
                      color: Colors.grey,
                    ),
                    width: constraints.maxWidth / 2,
                    padding: const EdgeInsets.symmetric(vertical: 4),
                    child: Text(
                      '[Chưa xác định]',
                      style: GoogleFonts.beVietnamPro(fontSize: 17),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
            );
          }
          return RadarChart(
            maxHeight: constraints.maxWidth,
            values: [
              stats!.visual,
              stats!.basicCompetency,
              stats!.personality,
              stats!.behavioral,
              stats!.speaking,
            ],
            labels: const [
              'Ngoại hình',
              'Năng lực',
              'Tính cách',
              'Hành vi',
              'Lời nói',
            ],
            maxValue: 100,
            fillColor: characterColor,
            chartRadiusFactor: 0.7,
          );
        }
        return const SizedBox.shrink();
      },
    );
  }
}
