export default {
  server: {
    host: '0.0.0.0',
  },
  ssr: true,
  mode: 'universal',
  target: 'server',
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/sass/style.scss',
    'assets/style.css',
    'animate.css'
  ],

  purgeCSS: {
    mode: 'postcss',
    enabled: false, // or `false` when in dev/debug mode
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css'],
    whitelist: [
      'body',
      'html',
      'nuxt-progress',
      'g-sidenav-pinned',
      'ps'
    ],
    whitelistPatterns: [/^quill/, /^ql-.+/, /^ni-.+/, /^ni$/, /^owl-.+/],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/axios'},
    {src: '~/plugins/vuex-persistence.js'},
    {src: '~plugins/vue-the-mask.js', ssr: false},
    {src: '~/plugins/main.js', ssr: false},
    {src: '~/plugins/vue-agile.js', ssr: false},
    {src: '~/plugins/youtube.js', ssr: false},
    {src: '~/plugins/helper.js'},
    {src: '~/plugins/root-mixins.js'},
    {src: '~/plugins/img-directive.js'},
    {src: '~/plugins/global-event.js', ssr: false},
    {src: '~/plugins/laravel-echo.js', ssr: false},
    {src: '~/plugins/root-directive.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'nuxt-purgecss',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    "@nuxtjs/dotenv",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: (process.env.NODE_ENV === "development"
      ? process.env.CORE_URL_DEV : 'https://web.codifyhealthcare.com/api') + '/_cmt/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
