module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Openbook Organization',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'The Openbook Organization website'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,600,700,800|Roboto:400,500,700'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.exec\.js$/,
        use: ['script-loader']
      })

    }
  },
  plugins: [
    '~plugins/vue-bootstrap.js'
  ],
  css: [
    '@/assets/styles/index.scss',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  modules: [
    ['nuxt-i18n', {
      // Options
      locales: [
        'en',
        'fr',
        'es'
      ],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        // If enabled, a cookie is set once a user has been redirected to his
        // preferred language to prevent subsequent redirections
        // Set to false to redirect every time
        useCookie: true,
        // Cookie name
        cookieKey: 'i18n_redirected'
      },
      seo: true,
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            "home": {
              "title": "Welcome"
            }
          },
          fr: {
            "home": {
              "title": "Bienvenue"
            }
          },
          es: {
            "home": {
              "title": "Bienvenido"
            }
          }
        }
      }
    }]
  ]
}
