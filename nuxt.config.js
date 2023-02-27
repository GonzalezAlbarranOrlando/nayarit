const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nayarit | Presupuesto Ciudadano 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'title', content: 'Nayarit' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Nayarit | Presupuesto Ciudadano 2019' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: 'favicomatic/mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: 'favicomatic/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: 'favicomatic/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: 'favicomatic/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: 'favicomatic/mstile-310x310.png' },
      { hid: 'description', name: 'description', content: 'Nayarit | Presupuesto Ciudadano 2019' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicomatic/favicon-196x196.png', size: '196x196' },
      { rel: 'icon', type: 'image/png', href: 'favicomatic/favicon-96x96.png', size: '96x96' },
      { rel: 'icon', type: 'image/png', href: 'favicomatic/favicon-32x32.png', size: '32x32' },
      { rel: 'icon', type: 'image/png', href: 'favicomatic/favicon-16x16.png', size: '16x16' },
      { rel: 'icon', type: 'image/png', href: 'favicomatic/favicon-128.png', size: '128x128' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-57x57.png', size: '57x57' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-114x114.png', size: '114x114' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-72x72.png', size: '72x72' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-114x114.png', size: '144x144' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-60x60.png', size: '60x60' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-120x120.png', size: '120x120' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-76x76.png', size: '76x76' },
      { rel: 'apple-touch-icon-precomposed', href: 'favicomatic/apple-touch-icon-152x152.png', size: '152x152' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js' }
    ]
  },

  router: {
    base: '/presprueCiudadano2019/'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/fontawesome',
    { src: '@/plugins/owl.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
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
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      return [
        'criterios-de-evaluacion/acceso-inicial',
        'criterios-de-evaluacion/ley-de-ingresos',
        'criterios-de-evaluacion/clasificacion',
        'criterios-de-evaluacion/poderes-dependencia-y-organos',
        'criterios-de-evaluacion/municipios',
        'criterios-de-evaluacion/tabuladores-y-plazas',
        'criterios-de-evaluacion/deuda-publica',
        'criterios-de-evaluacion/recursos-federales',
        'criterios-de-evaluacion/rubros-especificos',
        'criterios-de-evaluacion/criterios'
      ]
    }
  }
}
