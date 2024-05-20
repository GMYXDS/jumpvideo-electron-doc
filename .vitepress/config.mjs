import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/jumpvideo-electron-doc/',
  head: [["link", { rel: "icon", href: "/jve.ico" }]],
  title: "JumpVideo-Electron",
  description: "通过链接实现笔记到指定视频时刻跳转,jumpvideo,jumpvideo-electron,视频时间戳链接。可以将视频的某个时间点生成链接，方便从笔记中点击链接直达对应的视频播放点。支持potplayer、浏览器网页视频作为载体",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "使用指南", link: "/useage" },
    ],
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "使用指南", link: "/useage" },
          { text: "帮助", link: "/help" },
          { text: "下载", link: "/download" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/GMYXDS/jumpvideo-electron" }],
    footer: {
      message: "基于 GPL-3.0 许可发布",
      copyright: "版权所有 © 2024 Opensource",
    },
    logo: "/jve.png",
    outline: {
      level: "deep",
      label: "大纲",
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
});
