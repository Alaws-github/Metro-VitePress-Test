import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Metro IPO",
  description: "Orba Technology",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manuals', link: '/admin-dashboard' }
    ],

    sidebar: [
      {
        text: 'Manuals',
        items: [
          { text: 'Admin Dashboard', link: '/admin-dashboard' },
          { text: 'Client Dashboard', link: '/client-dashboard' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
