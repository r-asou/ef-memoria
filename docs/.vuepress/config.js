import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
	plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '标题搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
	contributors: false,
	// 可折叠的侧边栏
    sidebar: {
      '/': [
        {
          text: '前言',  // 标题
          collapsible: true, // 是否折叠
          children: ['/'],   // 文件名
        },
		{
        text: '游戏', 
        collapsible: true,
        children: ['游戏'],
      },
      {
        text: '动画',
        children: ['动画'],
        collapsible: true,
      },
      {
        text: '书籍',
        children: ['书籍'],
        collapsible: true,
      },
      {
        text: 'CD',
        collapsible: true,
        children: ['CD'],
      },
      {
        text: '周边',
        collapsible: true,
        children: ['周边'],
      },
      {
        text: '18+',
        collapsible: true,
        children: ['18'],
      },
      ],
    },
  }),
}