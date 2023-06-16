export const themeData = JSON.parse("{\"contributors\":false,\"sidebar\":{\"/\":[{\"text\":\"前言\",\"collapsible\":true,\"children\":[\"/\"]},{\"text\":\"游戏\",\"collapsible\":true,\"children\":[\"游戏\"]},{\"text\":\"动画\",\"children\":[\"动画\"],\"collapsible\":true},{\"text\":\"书籍\",\"children\":[\"书籍\"],\"collapsible\":true},{\"text\":\"CD\",\"collapsible\":true,\"children\":[\"CD\"]},{\"text\":\"周边\",\"collapsible\":true,\"children\":[\"周边\"]},{\"text\":\"18+\",\"collapsible\":true,\"children\":[\"18\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
