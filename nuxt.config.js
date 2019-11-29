const pkg = require('./package')
const bodyParser = require('body-parser');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nagikhology Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Development Blog' }
    ],
    link: [
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Baskervville" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css',
    '~assets/styles/wysiwyg.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-7f3e9.firebaseio.com',
    credentials: false
  },
  toast: {
    position: 'bottom-right',
    duration: 1750
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-7f3e9.firebaseio.com',
    fbAPIKey: ''
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
