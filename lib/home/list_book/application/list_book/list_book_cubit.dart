import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

import '../../../../data/data.dart';
import '../../../../data/models/publish_model.dart';

part 'list_book_state.dart';

class ListBookCubit extends Cubit<ListBookState> {
  ListBookCubit(this._dataSource) : super(ListBookInitial());

  final  ILocalDataSource _dataSource;

  Future<void> getData() async {
    final reponsitory = await _dataSource.getListBook();
    emit(ListBookSuccess(reponsitory));
  }
}
