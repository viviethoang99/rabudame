// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'chart_radar_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ChartRadarModel _$ChartRadarModelFromJson(Map<String, dynamic> json) =>
    ChartRadarModel(
      (json['visual'] as num?)?.toDouble() ?? 0,
      (json['basic_competency'] as num?)?.toDouble() ?? 0,
      (json['personality'] as num?)?.toDouble() ?? 0,
      (json['behavioral'] as num?)?.toDouble() ?? 0,
      (json['speaking'] as num?)?.toDouble() ?? 0,
    );

Map<String, dynamic> _$ChartRadarModelToJson(ChartRadarModel instance) =>
    <String, dynamic>{
      'visual': instance.visual,
      'basic_competency': instance.basicCompetency,
      'personality': instance.personality,
      'behavioral': instance.behavioral,
      'speaking': instance.speaking,
    };
