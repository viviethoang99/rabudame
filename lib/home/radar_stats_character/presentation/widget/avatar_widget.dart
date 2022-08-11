import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

class AvatarWidget extends StatelessWidget {
  const AvatarWidget({
    Key? key,
    required this.urlImage,
    required this.avatar,
  }) : super(key: key);

  final String avatar;
  final String urlImage;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return GestureDetector(
          onTap: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) {
              return DetailScreen(path: urlImage);
            }));
          },
          child: Hero(
            tag: urlImage,
            child: Container(
              decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.black,
                  width: 1.5,
                ),
              ),
              width: 350,
              height: 350,
              child: _ImageWidget(
                url: avatar,
              ),
            ),
          ),
        );
      },
    );
  }
}

class _ImageWidget extends StatelessWidget {
  const _ImageWidget({
    Key? key,
    required this.url,
  }) : super(key: key);

  final String url;

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageBuilder: (context, imageProvider) => Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: imageProvider,
            fit: BoxFit.fitWidth,
            filterQuality: FilterQuality.high,
          ),
        ),
      ),
      imageUrl: url,
      placeholder: (_, url) => Container(
        width: double.infinity,
        height: double.infinity,
        color: Colors.grey,
      ),
      errorWidget: (_, ___, error) => const Icon(Icons.error),
    );
  }
}

class DetailScreen extends StatelessWidget {
  const DetailScreen({
    Key? key,
    required this.path,
  }) : super(key: key);
  final String path;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        child: Center(
          child: Hero(
            tag: path,
            child: Image.network(path),
          ),
        ),
        onTap: () {
          Navigator.pop(context);
        },
      ),
    );
  }
}
