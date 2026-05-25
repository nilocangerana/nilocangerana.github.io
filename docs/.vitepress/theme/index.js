import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useRoute } from 'vitepress'
import Collapsible from './components/Collapsible.vue'
//import ThemeToggle from './components/ThemeToggle.vue'
import LangToggle from './components/LangToggle.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Collapsible', Collapsible)
    //app.component('ThemeToggle', ThemeToggle)
    app.component('LangToggle', LangToggle)
  },

  //Toogle
  Layout() {
  return h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () => h('div', { style: 'display:flex; gap:10px;' }, [
      //h(ThemeToggle),
      h(LangToggle)
    ])
  })
}
}