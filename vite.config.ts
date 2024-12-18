import path from "node:path";

import vue from "@vitejs/plugin-vue";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  // base: "/haishan-ai/",
  define: {
    "process.env": {},
  },
  plugins: [
    vue(),
    svgLoader({
      defaultImport: "component",
      svgo: false,
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  server: {
    proxy: {
      "/apps/v1": {
        target: "https://apifoxmock.com/m1/5326416-0-default",
        changeOrigin: true,
      },
      "/haishan-ai": {
        // target: "https://apifoxmock.com/m1/5326416-0-default",
        target: "http://1.15.247.75",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/haishan-ai/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
