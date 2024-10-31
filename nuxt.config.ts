// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Bay School XC/TF',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['@/assets/css/styles.scss'],

  compatibilityDate: '2024-09-07',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  gtag: {
    id: 'G-QNLZ5NY7HH',
  },
});
