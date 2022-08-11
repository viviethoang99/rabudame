// ignore_for_file: lines_longer_than_80_chars

import 'dart:math' show cos, pi, sin;
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../common/common_paint_utils.dart';

/// Helper class to draw the different radar chart elements.
class RadarChartDrawUtils {
  /// Draws the labels at the given offset positions at the outside of the graph.
  static void drawLabels(
      Canvas canvas,
      Offset center,
      List<String> labels,
      List<Offset> labelPoints,
      double textSize,
      double labelWidth,
      int maxLinesForLabels,
      Color labelColor) {
    var textPainter = TextPainter(textDirection: TextDirection.ltr);
    for (var i = 0; i < labelPoints.length; i++) {
      textPainter.text = TextSpan(
          text: labels[i],
          style: GoogleFonts.beVietnamPro(
            color: labelColor,
            fontSize: textSize,
            fontWeight: FontWeight.bold,
          ));
      textPainter.maxLines = maxLinesForLabels;
      textPainter.textAlign = TextAlign.center;

      textPainter.layout(maxWidth: labelWidth);

      // Top-left
      if (labelPoints[i].dx < center.dx && labelPoints[i].dy < center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(
                -(textPainter.size.width + CommonPaintUtils.LABEL_X_PADDING),
                -CommonPaintUtils.LABEL_Y_PADDING));
      }

      // Bottom-right
      else if (labelPoints[i].dx > center.dx && labelPoints[i].dy > center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(CommonPaintUtils.LABEL_X_PADDING,
                -CommonPaintUtils.LABEL_Y_PADDING / 2));
      }

      // Top-right
      else if (labelPoints[i].dx > center.dx && labelPoints[i].dy < center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(CommonPaintUtils.LABEL_X_PADDING,
                -textPainter.size.height / 2));
      }
      // Bottom-left
      else if (labelPoints[i].dx < center.dx && labelPoints[i].dy > center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(
                -(textPainter.size.width +
                    CommonPaintUtils.LABEL_X_PADDING / 2),
                -CommonPaintUtils.LABEL_Y_PADDING / 2));
      }
      // Top-center
      else if (labelPoints[i].dx == center.dx &&
          labelPoints[i].dy < center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(
                -(textPainter.size.width / 2),
                -(textPainter.size.height +
                    CommonPaintUtils.LABEL_Y_PADDING / 2)));
      }
      //bottom-center
      else if (labelPoints[i].dx == center.dx &&
          labelPoints[i].dy > center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(-(textPainter.size.width / 2),
                CommonPaintUtils.LABEL_Y_PADDING));
      }
      //right-center
      else if (labelPoints[i].dx > center.dx &&
          labelPoints[i].dy == center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(CommonPaintUtils.LABEL_X_PADDING,
                -(textPainter.size.height / 2)));
      }
      //left-center
      else if (labelPoints[i].dx < center.dx &&
          labelPoints[i].dy == center.dy) {
        textPainter.paint(
            canvas,
            labelPoints[i].translate(
                -(textPainter.size.width + CommonPaintUtils.LABEL_X_PADDING),
                -(textPainter.size.height / 2)));
      }
    }
  }

  /// Draws the outlines of the chart based on the [RadarChart.maxValue].
  static List<Offset> drawChartOutline(
      Canvas canvas,
      Offset center,
      double angle,
      Color strokeColor,
      double maxValue,
      int noOfPoints,
      double animationPercent,
      double chartRadius) {
    var boundaryPoints = <Offset>[];
    var outerPoints = <Offset>[];
    for (var i = 0; i < maxValue; i += maxValue ~/ 5) {
      boundaryPoints.clear();
      for (var j = 0; j < noOfPoints; j++) {
        var x = animationPercent * chartRadius * cos(angle * j - pi / 2);
        var y = animationPercent * chartRadius * sin(angle * j - pi / 2);
        x -= x * i / maxValue;
        y -= y * i / maxValue;
        boundaryPoints.add(Offset(x, y) + center);
        if (i == 0) {
          outerPoints.add(boundaryPoints[j]);
        }
        canvas.drawLine(
          center,
          boundaryPoints[j],
          CommonPaintUtils.getStrokePaint(strokeColor, 200, 2),
        );
      }
      boundaryPoints.add(boundaryPoints[0]);
      canvas.drawPoints(
        PointMode.polygon,
        boundaryPoints,
        CommonPaintUtils.getStrokePaint(
          strokeColor,
          200,
          i == 0 ? 5 : 1.2,
        ),
      );
    }
    canvas.drawCircle(
        center,
        2.0,
        CommonPaintUtils.getFillPaint(
          strokeColor,
          alpha: 200,
        ));
    return outerPoints;
  }

  /// Draws the graph data for all the value points with the background color defined by
  /// [RadarChart.fillColor].
  static void drawGraphData(Canvas canvas, List<Offset> valuePoints,
      Color fillColor, Color strokeColor) {
    final valuePath = Path()..addPolygon(valuePoints, true);
    canvas.drawPath(
        valuePath, CommonPaintUtils.getFillPaint(fillColor, alpha: 200));
    canvas.drawPath(
        valuePath, CommonPaintUtils.getStrokePaint(fillColor, 200, 1.5));
  }
}
