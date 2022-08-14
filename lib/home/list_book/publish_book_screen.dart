import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_layout_grid/flutter_layout_grid.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../gen/assets.gen.dart';
import '../../util/reponsiveness.dart';
import 'application/list_book/list_book_cubit.dart';
import 'widget/book_item.dart';

class PublishBookScreen extends StatelessWidget {
  const PublishBookScreen({Key? key}) : super(key: key);

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
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 50).r,
      child: const Center(
        child: ResponsiveWidget(
          largeScreen: _LargeScreen(maxWidth: 1000),
          smallScreen: _SmallScreen(),
        ),
      ),
    );
  }
}

class _LargeScreen extends StatelessWidget {
  const _LargeScreen({
    Key? key,
    required this.maxWidth,
  }) : super(key: key);

  final double maxWidth;

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
          ).r,
          constraints: BoxConstraints(maxWidth: maxWidth),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(
              color: Colors.black,
              width: 2,
            ),
          ),
          child: BlocBuilder<ListBookCubit, ListBookState>(
            builder: (_, state) {
              if (state is ListBookSuccess) {
                return LayoutGrid(
                  columnGap: 20,
                  rowGap: 20,
                  columnSizes: [1.fr, 1.fr],
                  rowSizes: List<IntrinsicContentTrackSize>.generate(
                    (state.listBook.length / 2).round(),
                    (int index) => auto,
                  ),
                  children: List<Widget>.generate(
                    state.listBook.length,
                    (int index) => BookCoverWidget(
                      item: state.listBook[index],
                    ),
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
          padding: const EdgeInsets.all(50).r,
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
