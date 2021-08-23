// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '前言',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          '/'
        ]
		  },
        {
        title: '游戏',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          '游戏'
        ]
		  },
	  {
        title: '动画',
        children: [
		   '动画' 
		],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }	,  
	  {
        title: '书籍',
        children: [
		   '书籍' 
		],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
        {
        title: 'CD',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          'CD'
        ]
		  },	  
        {
        title: '周边',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          '周边'
        ]
		  },
        {
        title: '18+',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          '18'
        ]
		  },	
		  
    ],
	sidebarDepth : 2	
  }
}