import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

import '../../../../data/data.dart';
import '../../../../data/models/publish_model.dart';

part 'list_book_state.dart';

class ListBookCubit extends Cubit<ListBookState> {
  ListBookCubit() : super(ListBookInitial());

  final test = const LocalDataSource();

  Future<void> getData() async {
    final reponsitory = await test.getListBook();
    emit(ListBookSuccess(reponsitory));
  }
}
