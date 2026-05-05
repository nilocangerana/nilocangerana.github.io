import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nilo Cangerana - Portfolio',
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
    nav: [
      { text: 'GameDev', link: '/' },
      { text: 'FullStackDev', link: '/fullstack' },
      { text: 'AI / Machine Learning', link: '/aiml' },
      { text: 'Other', link: '/other' }
    ],
    sidebar: undefined
  }
})