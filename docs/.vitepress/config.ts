import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  locales: {
    root: {
      label: '🇺🇸 English',
      lang: 'en-US',
      title: 'Nilo Cangerana - Portfolio',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'GameDev', link: '/gamedev' },
          { text: 'FullStackDev', link: '/fullstack' },
          { text: 'AI / Machine Learning', link: '/aiml' },
          { text: 'Other', link: '/other' }
        ]
      }
    },
    pt: {
      label: '🇧🇷 Português',
      lang: 'pt-BR',
      title: 'Nilo Cangerana - Portfólio',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/pt/' },
          { text: 'GameDev', link: '/pt/gamedev' },
          { text: 'FullStackDev', link: '/pt/fullstack' },
          { text: 'AI / Machine Learning', link: '/pt/aiml' },
          { text: 'Outros', link: '/pt/other' }
        ]
      }
    }
  },
  
  appearance: false,
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9RWLPHHB6B' }
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9RWLPHHB6B');
      `
    ]
  ],

  themeConfig: {
    logo: undefined,
    outline: false,
    sidebar: undefined
  },
})