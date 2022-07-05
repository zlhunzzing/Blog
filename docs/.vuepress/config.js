module.exports = {
  title: "김지훈 블로그",
  base: "/blog/",
  themeConfig: {
    nav: [{ text: "방명록", link: "/guestbook/" }],
    sidebar: [
      {
        title: "Test",
        children: ["/test/"],
      },
    ],
  },
};
