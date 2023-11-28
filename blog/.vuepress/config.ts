import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import {gungnirTheme} from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Oort",
  description: "笔墨间，岁月静好，吾心所向，字字珠玑，篇篇不朽。",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", {name: "application-name", content: "Xiaohan Zou"}],
    ["meta", {name: "apple-mobile-web-app-title", content: "Xiaohan Zou"}],
    [
      "meta",
      {name: "apple-mobile-web-app-status-bar-style", content: "black"}
    ],
    [
      "link",
      {rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png`}
    ],
    ["meta", {name: "theme-color", content: "#377bb5"}],
    ["meta", {name: "msapplication-TileColor", content: "#377bb5"}]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "yaooort/yaooort",
    docsDir: "blog",
    docsBranch: "main",
    navbarTitle: "0.0",
    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    searchText: "搜索",
    // personal information
    personalInfo: {
      name: "Oort",
      avatar: "/img/avatar.jpg",
      description: "我本将心照明月，奈何明月照沟渠",
      sns: {
        github: "yaooort",
        // linkedin: "yaooort",
        // facebook: "yaooort",
        // twitter: "yaooort",
        // zhihu: "yaooort",
        email: "yaooort@gmail.com",
        rss: "/rss.xml",
        // 添加其他的社交平台
        bilibili: {  // 随便什么名字
          icon: "ri-bilibili-line",  // 社交平台的图标
          link: "https://www.bilibili.com/"  // 主页链接
        }
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://oortk.com/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-8MWRXR83EZ",
      ba: "0063b84a6a9d21a9a3ae130a736d2193",
      rss: {
        siteURL: "https://oortk.com",
        copyright: "Renovamen 2018-2022"
      }
    },

    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "关于",
        link: "https://zxh.io",
        icon: "fa-paw"
      },
      {
        text: "其他",
        link: "https://portfolio.zxh.io/",
        icon: "oi-rocket"
      }
    ],

    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Oort</a> 2009-2024
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> & <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
      <br>
      <a target="_blank" href="https://beian.miit.gov.cn">沪ICP备11018329号-5 / </a>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">沪公网安备31010402002252号  </a>
     `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
