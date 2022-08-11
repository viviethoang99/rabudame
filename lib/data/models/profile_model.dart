import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

import 'models.dart';

part 'profile_model.g.dart';

typedef ListProfile = List<ProfileModel>;

@JsonSerializable()
class ProfileModel {
  const ProfileModel(
    this.name,
    this.classmate,
    this.idStudent,
    this.birthday,
    this.middleSchools,
    this.club,
    this.assessSuitability,
    this.radarStat,
    this.profile,
    this.characterColor,
    this.role,
    this.urlImage,
    this.avatar,
  );

  factory ProfileModel.fromJson(Map<String, dynamic> json) =>
      _$ProfileModelFromJson(json);

  Map<String, dynamic> toJson() => _$ProfileModelToJson(this);

  final String name;
  @JsonKey(name: 'url_image')
  final String urlImage;
  @JsonKey(name: 'classmate')
  final String classmate;
  @JsonKey(name: 'id_student')
  final String idStudent;
  @JsonKey(name: 'character_color')
  final String characterColor;
  @JsonKey(name: 'birthday', defaultValue: 'Đang điều tra')
  final String birthday;
  @JsonKey(name: 'middle_schools', defaultValue: 'Đang điều tra')
  final String middleSchools;
  @JsonKey(name: 'club', defaultValue: 'Không có')
  final String club;
  @JsonKey(name: 'assess_suitability', defaultValue: 'Không xác định')
  final String assessSuitability;
  @JsonKey(name: 'radar_stat')
  final ChartRadarModel? radarStat;
  final String profile;
  final String role;
  @JsonKey(name: 'avatar')
  final String? avatar;
}

extension ProfileModelX on ProfileModel {
  String birthdayToString() {
    if (birthday != 'Đang điều tra') {
      final sub = birthday.split('/');
      return 'Ngày ${sub.first} tháng ${sub.last}';
    }
    return birthday;
  }

  Color fromHex() {
    final buffer = StringBuffer();
    if (characterColor.length == 6 || characterColor.length == 7) {
      buffer.write('ff');
    }
    buffer.write(characterColor.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  List<String> get splitName {
    return name.split(' ');
  }

  String classmateToString() {
    return '$classmate / Mã số học sinh $idStudent';
  }
}
