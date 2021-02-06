export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'agro',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    host: '192.168.1.31',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts','@aceforth/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true,
    mozjpeg: {
      quality: 86,
    },
    webp: {
      preset: 'default',
      quality: 100,
    },
    responsive: {
      adapter: require("responsive-loader/sharp"),
    }
  },
  googleFonts: {
    families: {
      'Open+Sans':true,
      Poppins: [100,500,600],
      Cabin:[400,500],
      Roboto: [600],
      'IBM+Plex+Mono':[300]
    },
    display: 'swap',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/cloudinary'],
  cloudinary: {
    cloudName: 'dtvvkwgbg'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
