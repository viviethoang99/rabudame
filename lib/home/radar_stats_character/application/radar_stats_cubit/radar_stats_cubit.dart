import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

import '../../../../data/data.dart';

part 'radar_stats_state.dart';

class RadarStatsCubit extends Cubit<RadarStatsState> {
  RadarStatsCubit() : super(RadarStatsInitial());

  final test = const LocalDataSource();

  Future<void> getData() async {
    final reponsitory = await test.getListProfile();
    emit(RadarStatsSucces(reponsitory));
  }
}
