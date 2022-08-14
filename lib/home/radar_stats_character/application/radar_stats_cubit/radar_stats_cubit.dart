import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

import '../../../../data/data.dart';

part 'radar_stats_state.dart';

class RadarStatsCubit extends Cubit<RadarStatsState> {
  RadarStatsCubit(this._dataSource) : super(RadarStatsInitial());

  final ILocalDataSource _dataSource;

  Future<void> getData() async {
    final reponsitory = await _dataSource.getListProfile();
    emit(RadarStatsSucces(reponsitory));
  }
}
