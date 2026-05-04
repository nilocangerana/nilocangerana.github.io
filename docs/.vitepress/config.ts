import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nilo Cangerana - Portfolio',
  appearance: false,

  themeConfig: {
    logo: undefined,
    outline: false,
    nav: [
      { text: 'GameDev', link: '/' },
      { text: 'FullStackDev', link: '/fullstack' },
      { text: 'Other', link: '/other' }
    ],
    sidebar: undefined
  }
})