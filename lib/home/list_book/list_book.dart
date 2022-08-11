import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../gen/assets.gen.dart';
import '../../util/reponsiveness.dart';
import 'application/list_book/list_book_cubit.dart';
import 'widget/list_book_screen.dart';

class ListBookWidget extends StatelessWidget {
  const ListBookWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          colorFilter: ColorFilter.mode(
            Colors.red.withOpacity(0.2),
            BlendMode.dstATop,
          ),
          image: AssetImage(Assets.background.background.path),
          repeat: ImageRepeat.repeat,
          alignment: Alignment.topCenter,
          filterQuality: FilterQuality.medium,
        ),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 50),
      child: BlocProvider<ListBookCubit>(
        create: (context) => ListBookCubit()..getData(),
        child: const Center(
          child: ResponsiveWidget(
            largeScreen: _LargeScreen(
              mainAxisExtent: 900,
              crossAxisCount: 2,
              maxWidth: 1000,
            ),
            mediumScreen: _LargeScreen(
              mainAxisExtent: 700,
              crossAxisCount: 2,
              maxWidth: 724,
            ),
            smallScreen: _SmallScreen(),
          ),
        ),
      ),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({
    Key? key,
    required this.mainAxisExtent,
    required this.maxWidth,
    required this.crossAxisCount,
  }) : super(key: key);

  final double mainAxisExtent;
  final double maxWidth;
  final int crossAxisCount;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          constraints: BoxConstraints(
            maxWidth: maxWidth,
          ),
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 20),
          color: Colors.black,
          child: const Text(
            'Xuất bản',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Container(
          padding: const EdgeInsets.symmetric(
            horizontal: 50,
            vertical: 50,
          ),
          constraints: BoxConstraints(maxWidth: maxWidth),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(
              color: Colors.black,
              width: 2,
            ),
          ),
          child: BlocBuilder<ListBookCubit, ListBookState>(
            builder: (context, state) {
              if (state is ListBookSuccess) {
                return GridView.builder(
                  shrinkWrap: true,
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: crossAxisCount,
                    crossAxisSpacing: 20,
                    mainAxisSpacing: 20,
                    mainAxisExtent: mainAxisExtent,
                  ),
                  itemCount: state.listBook.length,
                  itemBuilder: (BuildContext _, int index) {
                    return BookCoverWidget(
                      key: ValueKey('VOLUME_${state.listBook[index].volume}'),
                      item: state.listBook[index],
                    );
                  },
                );
              }
              return const SizedBox.shrink();
            },
          ),
        ),
      ],
    );
  }
}

class _SmallScreen extends StatelessWidget {
  const _SmallScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 20),
          color: Colors.black,
          child: Text(
            'Xuất bản',
            textAlign: TextAlign.center,
            style: GoogleFonts.beVietnamPro(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Container(
          padding: const EdgeInsets.symmetric(
            horizontal: 50,
            vertical: 50,
          ),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(
              color: Colors.black,
              width: 2,
            ),
          ),
          child: BlocBuilder<ListBookCubit, ListBookState>(
            builder: (context, state) {
              if (state is ListBookSuccess) {
                return ListView.separated(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: state.listBook.length,
                  itemBuilder: (BuildContext _, int index) {
                    return BookCoverWidget(
                      key: ValueKey('VOLUME_${state.listBook[index].volume}'),
                      item: state.listBook[index],
                    );
                  },
                  separatorBuilder: (_, __) => const SizedBox(
                    height: 20,
                  ),
                );
              }
              return const SizedBox.shrink();
            },
          ),
        ),
      ],
    );
  }
}
