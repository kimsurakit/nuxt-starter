// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase:
        "https://500c-2405-9800-b521-5f13-f589-5eb0-f6b3-4c6e.ap.ngrok.io/",
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
