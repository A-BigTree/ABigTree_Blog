import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  plugins: [
    searchProPlugin({
      locales: {
        "/": {
          // 覆盖 placeholder
          placeholder: "开始搜索",
        }
      },
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  base: "/blog/",

  // 设置正在使用的语言
  lang: "zh-CN",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ABigTree的博客🌳",
      description: "ABigTree的博客🌳",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
