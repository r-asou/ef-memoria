import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
  sidebar: [
  { 
   text: '前言',
   collapsible: true,
   children: [
   '/'
   ],
    },
	  { 
   text: '游戏',
	collapsible: true,
   children: [
   '/game'
   ],
    },
  { 
   text: '动画',
	collapsible: true,
   children: [
   '/anime'
   ],
    },
	  { 
   text: '书籍',
	collapsible: true,
   children: [
   '/book'
   ],
    },
	  { 
   text: 'CD',
	collapsible: true,
   children: [
   '/CD'
   ],
    },
	  { 
   text: '周边',
	collapsible: true,
   children: [
   '/hobby'
   ],
    },
	  { 
   text: '18+',
	collapsible: true,
   children: [
   '/18'
   ],
    },
   ],
 }),
   plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
})