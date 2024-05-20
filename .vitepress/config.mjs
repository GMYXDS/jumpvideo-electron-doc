import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/jumpvideo-electron-doc/',
  sitemap: {
    hostname: 'https://gmyxds.github.io/jumpvideo-electron-doc/'
  },
  head: [
    ["link", { rel: "icon", href: "/jumpvideo-electron-doc/jve.ico" }]
],
  title: "JumpVideo-Electron",
  description: "通过链接实现笔记到指定视频时刻跳转,jumpvideo,jumpvideo-electron,视频时间戳链接。可以将视频的某个时间点生成链接，方便从笔记中点击链接直达对应的视频播放点。支持potplayer、浏览器网页视频作为载体",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      // { text: "使用指南", link: "/useage" },
      {
        text: '使用指南',
        items: [
          { text: "🧭 使用指南", link: "/useage" },
          { text: "💁 帮助", link: "/help" },
          { text: "⬇️ 下载", link: "/download" },
          { text: "👐 开源地址", link: "/opensource" },
          { text: "🌎 插件支持情况", link: "/websupport" },
        ]
      }
    ],
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "🧭 使用指南", link: "/useage" },
          { text: "💁 帮助", link: "/help" },
          { text: "⬇️ 下载", link: "/download" },
          { text: "👐 开源地址", link: "/opensource" },
          { text: "🌎 插件支持情况", link: "/websupport" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/GMYXDS/jumpvideo-electron" }
    ],
    footer: {
      message: "基于 GPL-3.0 许可发布",
      copyright: "Copyright © 2024 Opensource & Powered by VitePress",
    },
    logo: "/jve.png",
    outline: {
      level: "deep",
      label: "大纲",
    },
    editLink: {
      pattern: 'https://github.com/GMYXDS/jumpvideo-electron-doc/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新于: ',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
});
