// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase:
        "https://b69b-2405-9800-b521-5f13-b4b1-4543-aeb3-9715.ap.ngrok.io/",
    },
  },
  imports: {
    dirs: ["stores"],
  },
  css: ["~/assets/css/main.css", "~/assets/css/main.scss"],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ["nuxt-icon"],
    ["@vueuse/nuxt"],
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore",
          "storeToRefs",
        ],
      },
    ],
  ],
});
