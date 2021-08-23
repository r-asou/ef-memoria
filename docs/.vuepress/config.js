//.vuepress/config.js
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
          'game'
        ]
		  },
	  {
        title: '动画',
        children: [
		   'anime'
		],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }	,  
	  {
        title: '书籍',
        children: [
		   'book'
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
          'hobby'
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