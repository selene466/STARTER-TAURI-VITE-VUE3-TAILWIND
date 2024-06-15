import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [
        {
          src: "src/pages",
          path: "/",
        },
      ],
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    Components({
      dirs: ["src/components", "src/layouts"],
      resolvers: [IconsResolver({ prefix: "icons" })],
    }),
    Icons({ autoInstall: true, compiler: "vue3" }),
    VitePWA({
      /* comment devOptions below for production */
      devOptions: {
        enabled: true,
        type: "module",
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Starter Vite + Vue",
        short_name: "StarterApp",
        description: "Some description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
