// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'profile_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ProfileModel _$ProfileModelFromJson(Map<String, dynamic> json) => ProfileModel(
      json['name'] as String,
      json['classmate'] as String,
      json['id_student'] as String,
      json['birthday'] as String? ?? 'Đang điều tra',
      json['middle_schools'] as String? ?? 'Đang điều tra',
      json['club'] as String? ?? 'Không có',
      json['assess_suitability'] as String? ?? 'Không xác định',
      json['radar_stat'] == null
          ? null
          : ChartRadarModel.fromJson(
              json['radar_stat'] as Map<String, dynamic>),
      json['profile'] as String,
      json['character_color'] as String,
      json['role'] as String,
      json['url_image'] as String,
      json['avatar'] as String?,
    );

Map<String, dynamic> _$ProfileModelToJson(ProfileModel instance) =>
    <String, dynamic>{
      'name': instance.name,
      'url_image': instance.urlImage,
      'classmate': instance.classmate,
      'id_student': instance.idStudent,
      'character_color': instance.characterColor,
      'birthday': instance.birthday,
      'middle_schools': instance.middleSchools,
      'club': instance.club,
      'assess_suitability': instance.assessSuitability,
      'radar_stat': instance.radarStat,
      'profile': instance.profile,
      'role': instance.role,
      'avatar': instance.avatar,
    };
