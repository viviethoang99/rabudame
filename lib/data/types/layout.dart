enum AppPage {
  arasuji(
    path: 'ARASUJI',
    nameRouter: 'TÓM TẮT',
  ),
  character(
    path: 'CHARACTER',
    nameRouter: 'NHÂN VẬT',
  ),
  kanko(
    path: 'KANKO',
    nameRouter: 'XUẤT BẢN',
  );

  const AppPage({
    required this.path,
    required this.nameRouter,
  });

  final String path;
  final String nameRouter;
}
