import { Configuration } from '@nuxt/types'
import vuetifyOptions from './plugins/vuetify.js'
import pkg from './package.json'

const config: Configuration = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Environment variables
   */
  env: {
    apiUrl: process.env.API_URL || 'http://0.0.0.0:3000',
    storeUrl: process.env.STORE_URL || 'http://0.0.0.0:3000'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.sass', '@fortawesome/fontawesome-free/css/all.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/localStorage.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  buildModules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/vuetify', vuetifyOptions],
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
