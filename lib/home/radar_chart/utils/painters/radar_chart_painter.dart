// ignore_for_file: lines_longer_than_80_chars

import 'dart:math' show cos, min, pi, sin;

import 'package:flutter/material.dart';

import '../../common/common_paint_utils.dart';
import '../radar_chart_draw_utils.dart';

/// Custom Painter class for drawing the chart. Depends on various parameters like
/// [RadarChart.values], [RadarChart.labels], [RadarChart.maxValue], [RadarChart.fillColor],
/// [RadarChart.strokeColor], [RadarChart.legendTextColor], [RadarChart.textScaleFactor], [RadarChart.labelWidth],
/// [RadarChart.maxLinesForLabels], [RadarChart.chartRadiusFactor].
///
/// It also has [dataAnimationPercent] and [outlineAnimationPercent] which defines the
/// animation of the chart data and outlines.
///
class RadarChartPainter extends CustomPainter {
  const RadarChartPainter(
    this.values,
    this.labels,
    this.maxValue,
    this.fillColor,
    this.strokeColor,
    this.labelColor,
    this.textScaleFactor,
    this.labelWidth,
    this.maxLinesForLabels,
    this.dataAnimationPercent,
    this.outlineAnimationPercent,
    this.chartRadiusFactor,
  );

  final List<double> values;
  final List<String>? labels;
  final double maxValue;
  final Color fillColor;
  final Color strokeColor;
  final Color labelColor;
  final double textScaleFactor;
  final double? labelWidth;
  final int? maxLinesForLabels;
  final double dataAnimationPercent;
  final double outlineAnimationPercent;
  final double chartRadiusFactor;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2.0, size.height / 2.0);
    final angle = (2 * pi) / values.length;
    var valuePoints = <Offset>[];
    for (var i = 0; i < values.length; i++) {
      var radius = (values[i] / maxValue) *
          (min(center.dx, center.dy) * chartRadiusFactor);
      var x = dataAnimationPercent * radius * cos(angle * i - pi / 2);
      var y = dataAnimationPercent * radius * sin(angle * i - pi / 2);

      valuePoints.add(Offset(x, y) + center);
    }

    RadarChartDrawUtils.drawGraphData(
        canvas, valuePoints, fillColor, strokeColor);
    var outerPoints = RadarChartDrawUtils.drawChartOutline(
        canvas,
        center,
        angle,
        strokeColor,
        maxValue,
        values.length,
        outlineAnimationPercent,
        (min(center.dx, center.dy) * chartRadiusFactor));
    RadarChartDrawUtils.drawLabels(
      canvas,
      center,
      labels ?? values.map((v) => v.toString()).toList(),
      outerPoints,
      CommonPaintUtils.getTextSize(size, textScaleFactor),
      labelWidth ?? CommonPaintUtils.getDefaultLabelWidth(size, center, angle),
      maxLinesForLabels ?? CommonPaintUtils.getDefaultMaxLinesForLabels(size),
      labelColor,
    );
  }

  @override
  bool shouldRepaint(RadarChartPainter oldDelegate) {
    return oldDelegate.dataAnimationPercent != dataAnimationPercent;
  }
}
