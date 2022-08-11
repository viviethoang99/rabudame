import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class NameWidget extends StatelessWidget {
  const NameWidget({
    Key? key,
    required this.names,
    required this.color,
  }) : super(key: key);

  final List<String> names;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        color: Colors.black,
      ),
      padding: const EdgeInsets.all(10),
      child: RichText(
        textAlign: TextAlign.center,
        text: TextSpan(
          style: GoogleFonts.beVietnamPro(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
          children: <TextSpan>[
            TextSpan(
              text: names.first,
              style: GoogleFonts.beVietnamPro(
                color: Colors.white,
              ),
            ),
            const TextSpan(text: ' '),
            TextSpan(
              text: names.last,
              style: GoogleFonts.beVietnamPro(
                color: color,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
