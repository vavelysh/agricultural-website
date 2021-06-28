export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AGRO-MAR - usługi komunalne i rolnicze. Roboty ziemne i drogowe.',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      {
        name: 'author',
        content: 'Adrian Pykacz',
      },
      {
        name: 'copyright',
        content: 'Agro-Mar Pykacz Marcin',
      },
      { name: 'theme-color', content: '#263238' },
      {
        name: 'robots',
        content: 'follow',
      },
      {
        name: 'keywords',
        content:
          'Usługi rolnicze,Usługi komunalne,Roboty ziemne i drogowe,Sezon zimowy,Chybie,Pszczyna,Cieszyn,Województwo Śląskie,Koszenie poboczy drogowych,Utrzymanie zieleni,Usługi rębakiem,Utrzymanie czystości i porządku,Uprawa,Siew,Mulczowanie,Orka,Nawożenie,Odśnieżanie,Sprzedaż kruszyw,Utwardzenia,Budowa dróg,Podbudowy,Wyburzenia,Rozbiórki,Przewóz kruszyw',
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'AGRO-MAR to młoda, prężnie rozwijająca się firma z Chybia, świadcząca profesjonalne usługi komunalne i rolnicze działająca w województwie śląskim i okolicach.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
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
  buildModules: ['@nuxtjs/google-fonts', '@aceforth/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true,
    mozjpeg: {
      quality: 90,
    },
    webp: {
      preset: 'default',
      quality: 100,
    },
    responsive: {
      adapter: require('responsive-loader/sharp'),
    },
  },
  googleFonts: {
    download: true,
    families: {
      'Open+Sans': [400, 500, 600],
      Poppins: [100, 500, 600],
    },
    display: 'swap',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/cloudinary','@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'http://www.agromarchybie.pl/'
  },
  cloudinary: {
    cloudName: 'dtvvkwgbg',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
