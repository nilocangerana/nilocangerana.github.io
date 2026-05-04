import DefaultTheme from 'vitepress/theme'
import Collapsible from './components/Collapsible.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Collapsible', Collapsible)
  }
}