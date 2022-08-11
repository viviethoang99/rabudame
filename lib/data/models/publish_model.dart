import 'package:json_annotation/json_annotation.dart';

part 'publish_model.g.dart';

typedef ListBook = List<PublishModel>;

@JsonSerializable()
class PublishModel {
  const PublishModel(
    this.urlVietNamVersion,
    this.urlJapanVersion,
    this.title,
    this.summary,
    this.isPublish,
    this.shop,
    this.volume,
  );

  factory PublishModel.fromJson(Map<String, dynamic> json) =>
      _$PublishModelFromJson(json);

  Map<String, dynamic> toJson() => _$PublishModelToJson(this);

  final int volume;
  @JsonKey(name: 'url_VietNam_Version')
  final String? urlVietNamVersion;
  @JsonKey(name: 'url_Japan_Version')
  final String urlJapanVersion;
  @JsonKey(name: 'title', defaultValue: '#ayanothuathedeonaodc')
  final String title;
  @JsonKey(name: 'summary', defaultValue: '')
  final String summary;
  @JsonKey(name: 'isPublish')
  final bool isPublish;
  @JsonKey(name: 'shop')
  final ShopModel shop;
}

@JsonSerializable()
class ShopModel {
  const ShopModel(
    this.shoppeShop,
    this.tikiShop,
    this.thaiHaShop,
    this.lazadaShop,
  );

  factory ShopModel.fromJson(Map<String, dynamic> json) =>
      _$ShopModelFromJson(json);

  Map<String, dynamic> toJson() => _$ShopModelToJson(this);
  @JsonKey(name: 'shoppe_shop')
  final String? shoppeShop;
  @JsonKey(name: 'tiki_shop')
  final String? tikiShop;
  @JsonKey(name: 'thai_ha_shop')
  final String? thaiHaShop;
  @JsonKey(name: 'lazada_shop')
  final String? lazadaShop;
}
