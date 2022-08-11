import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../../../data/models/publish_model.dart';

class BookCoverWidget extends StatelessWidget {
  const BookCoverWidget({
    Key? key,
    required this.item,
  }) : super(key: key);

  final PublishModel item;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.black,
          width: 2,
        ),
      ),
      child: Column(
        children: [
          CachedNetworkImage(
            imageUrl: item.urlVietNamVersion ?? item.urlJapanVersion,
            placeholder: (context, url) => Container(
              color: Colors.grey,
            ),
            errorWidget: (context, url, error) => const Icon(Icons.error),
          ),
          Container(
            width: double.infinity,
            color: Colors.black,
            padding: const EdgeInsets.symmetric(vertical: 8),
            child: RichText(
              textAlign: TextAlign.center,
              text: TextSpan(
                children: [
                  TextSpan(
                    text: 'Tập',
                    style: GoogleFonts.beVietnamPro(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: Colors.white),
                  ),
                  TextSpan(
                    text: ' ${item.volume}',
                    style: GoogleFonts.beVietnamPro(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: const Color(0XFFfdf351),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 23),
          Padding(
            padding: EdgeInsets.symmetric(
              horizontal: 14,
              vertical: item.isPublish ? 0 : 50,
            ),
            child: Text(
              item.title,
              textAlign: TextAlign.center,
              style: GoogleFonts.beVietnamPro(
                fontWeight: FontWeight.bold,
                fontSize: item.isPublish ? null : 24,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(15.0),
            child: Text(
              item.summary,
              style: GoogleFonts.beVietnamPro(),
            ),
          )
        ],
      ),
    );
  }
}
