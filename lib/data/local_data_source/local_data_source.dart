import 'dart:convert';

import 'package:flutter/services.dart';

import '../../../../gen/assets.gen.dart';
import '../models/profile_model.dart';
import '../models/publish_model.dart';

abstract class ILocalDataSource {
  Future<ListProfile> getListProfile();

  Future<List> getListData(String name);

  Future<ListBook> getListBook();
}

class LocalDataSource implements ILocalDataSource {
  const LocalDataSource();

  @override
  Future<List> getListData(String name) async {
    final response = await rootBundle.loadString(Assets.json.data);
    final jsonData = json.decode(response);
    return jsonData[name];
  }

  @override
  Future<ListProfile> getListProfile() async {
    final result = await getListData('profile');
    final listData = result
        .map<ProfileModel>(
          // ignore: unnecessary_lambdas
          (e) => ProfileModel.fromJson(e),
        )
        .toList();
    return listData;
  }

  @override
  Future<ListBook> getListBook() async {
    final result = await getListData('volume');
    final listData = result
        .map<PublishModel>(
          // ignore: unnecessary_lambdas
          (e) => PublishModel.fromJson(e),
        )
        .toList();
    return listData;
  }
}
