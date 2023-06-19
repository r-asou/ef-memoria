// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '前言',   // 必要的
        path: '/',
        children: [
          '/README'
        ]
      },
      {
        title: '游戏',
        children: [
          '/游戏'
        ]
      },
      {
        title: '动画',
        children: [
          '/动画'
        ]
      },
      {
        title: '书籍',
        children: [
          '/书籍'
        ]
      },
      {
        title: 'CD',
        children: [
          '/CD'
        ]
      },
      {
        title: '周边',
        children: [
          '/周边'
        ]
      },
      {
        title: '18+',
        children: [
          '/18'
        ]
      }
    ],
    sidebarDepth: 2,
  },
}