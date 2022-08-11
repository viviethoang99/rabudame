import 'package:json_annotation/json_annotation.dart';

part 'chart_radar_model.g.dart';

@JsonSerializable()
class ChartRadarModel {
  const ChartRadarModel(
    this.visual,
    this.basicCompetency,
    this.personality,
    this.behavioral,
    this.speaking,
  );

  factory ChartRadarModel.fromJson(Map<String, dynamic> json) =>
      _$ChartRadarModelFromJson(json);

  Map<String, dynamic> toJson() => _$ChartRadarModelToJson(this);

  @JsonKey(name: 'visual', defaultValue: 0)
  final double visual;
  @JsonKey(name: 'basic_competency', defaultValue: 0)
  final double basicCompetency;
  @JsonKey(name: 'personality', defaultValue: 0)
  final double personality;
  @JsonKey(name: 'behavioral', defaultValue: 0)
  final double behavioral;
  @JsonKey(name: 'speaking', defaultValue: 0)
  final double speaking;

  bool get isUnknown =>
      visual == 0 &&
      basicCompetency == 0 &&
      personality == 0 &&
      behavioral == 0 &&
      speaking == 0;
}
