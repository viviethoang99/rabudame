part of 'list_book_cubit.dart';

abstract class ListBookState extends Equatable {
  const ListBookState();

  @override
  List<Object> get props => [];
}

class ListBookInitial extends ListBookState {}

class ListBookSuccess extends ListBookState {
  const ListBookSuccess(this.listBook);

  final ListBook listBook;

  @override
  List<Object> get props => [listBook];
}

class ListBookFailed extends ListBookState {}
