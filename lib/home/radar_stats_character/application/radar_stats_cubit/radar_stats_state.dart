part of 'radar_stats_cubit.dart';

abstract class RadarStatsState extends Equatable {
  const RadarStatsState();

  @override
  List<Object> get props => [];
}

class RadarStatsInitial extends RadarStatsState {}

class RadarStatsSucces extends RadarStatsState {
  const RadarStatsSucces(this.listProfile);

  final ListProfile listProfile;

  @override
  List<Object> get props => [listProfile];
}

class RadarStatsFailed extends RadarStatsState {}
