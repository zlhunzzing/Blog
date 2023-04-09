const fs = require("fs");

const routes = ["history", "web", "html", "css", "think"];

const sidebar = routes.map((route) => ({
  title: route,
  children: fs.readdirSync("./docs/" + route).map((path) => route + "/" + path),
}));

module.exports = {
  title: "김지훈 FE 블로그",
  base: "/blog/",
  themeConfig: {
    nav: [{ text: "방명록", link: "/guestbook/" }],
    sidebar,
  },
};
