// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  runtimeConfig: {
    public: { apiBase: process.env.NUXT_PUBLIC_API_BASE },
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
