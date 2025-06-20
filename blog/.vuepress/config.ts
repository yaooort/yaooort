import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import {gungnirTheme} from "vuepress-theme-gungnir";
import googleAdSensePlugin from 'vuepress-plugin-google-adsense';

const isProd = process.env.NODE_ENV === "production";
// 配置
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
    ["meta", {name: "application-name", content: "yao oort"}],
    ["meta", {name: "apple-mobile-web-app-title", content: "0ort"}],
    [
      "meta",
      {name: "apple-mobile-web-app-status-bar-style", content: "black"}
    ],
    [
      "link",
      {rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png`}
    ],
    ["meta", {name: "theme-color", content: "#377bb5"}],
    ["meta", {name: "msapplication-TileColor", content: "#377bb5"}],
    [
      "script",
      {
        "data-ad-client": "ca-pub-8875743245757885",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "yaooort/yaooort",
    editLink: false,
    lastUpdated: false,
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
        facebook: "Oort Null",
        // twitter: "yaooort",
        // zhihu: "yaooort",
        email: "yaooort@gmail.com",
        rss: "/rss.xml",
        // 添加其他的社交平台
        // 添加其他的社交平台
        bilibili: {  // 随便什么名字
          icon: "co-wechat",  // 社交平台的图标
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
      },
      {
        path: "/img/home-bg/6.jpeg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/7.jpeg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/8.jpeg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/9.jpeg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/10.jpeg",
        mask: "rgba(19, 75, 50, .2)"
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
      chartjs: {
        token: "chartjs"
      },
      mermaid: {
        token: "mermaid"
      },
      giscus: {
        repo: "yaooort/yaooort",
        repoId: "R_kgDOIthQuA",
        category: "Announcements",
        categoryId: "DIC_kwDOIthQuM4CbWX-",
        mapping: "url",
        crossorigin: "anonymous",
        darkTheme: "https://oortk.com/styles/giscus-dark.css",
        lazyLoad: true,
      },
      mdPlus: {
        all: true
      },
      ga: "G-8MWRXR83EZ",
      ba: "0063b84a6a9d21a9a3ae130a736d2193",
      rss: {
        siteURL: "https://oortk.com",
        copyright: "Oort 2018-2024"
      },
      readingTime: {
        excludes: [],  // 不需要进行统计的页面路径（可选，默认：[]）
        includes : [],  // 需要进行统计的页面路径，如果指定了这一项，那么 `excludes` 项无效（可选，默认：[]）
        wordsPerMinuteCN: 300,  // 一分钟可以阅读多少个中文字符（可选，默认：300）
        wordsPerMinuteEN: 160,  // 一分钟可以阅读多少个英文字符（可选，默认：160）
        excludeCodeBlock: false,  // 是否排除所有代码块内的字符（可选，默认：false）
        excludeTexBlock: false    // 是否排除所有公式块内的字符（可选，默认：false）
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
      // {
      //   text: "链接",
      //   link: "/links/",
      //   icon: "fa-satellite-dish"
      // },
      {
        text: "关于",
        link: "https://oortk.com",
        icon: "fa-paw"
      },
      // {
      //   text: "其他",
      //   link: "https://portfolio.zxh.io/",
      //   icon: "oi-rocket"
      // }
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
