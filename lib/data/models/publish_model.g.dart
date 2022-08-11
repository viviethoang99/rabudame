// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'publish_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PublishModel _$PublishModelFromJson(Map<String, dynamic> json) => PublishModel(
      json['url_VietNam_Version'] as String?,
      json['url_Japan_Version'] as String,
      json['title'] as String? ?? '#ayanothuathedeonaodc',
      json['summary'] as String? ?? '',
      json['isPublish'] as bool,
      ShopModel.fromJson(json['shop'] as Map<String, dynamic>),
      json['volume'] as int,
    );

Map<String, dynamic> _$PublishModelToJson(PublishModel instance) =>
    <String, dynamic>{
      'volume': instance.volume,
      'url_VietNam_Version': instance.urlVietNamVersion,
      'url_Japan_Version': instance.urlJapanVersion,
      'title': instance.title,
      'summary': instance.summary,
      'isPublish': instance.isPublish,
      'shop': instance.shop,
    };

ShopModel _$ShopModelFromJson(Map<String, dynamic> json) => ShopModel(
      json['shoppe_shop'] as String?,
      json['tiki_shop'] as String?,
      json['thai_ha_shop'] as String?,
      json['lazada_shop'] as String?,
    );

Map<String, dynamic> _$ShopModelToJson(ShopModel instance) => <String, dynamic>{
      'shoppe_shop': instance.shoppeShop,
      'tiki_shop': instance.tikiShop,
      'thai_ha_shop': instance.thaiHaShop,
      'lazada_shop': instance.lazadaShop,
    };
