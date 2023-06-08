// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bay School XC/TF',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  css: [
    '@/assets/styles/main.scss',
  ],
  colorMode: {
    classSuffix: ''
  },
  gtag: {
    id: 'G-QNLZ5NY7HH'
  }
})
