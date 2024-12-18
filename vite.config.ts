import path from "node:path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from "vite-svg-loader";

export default defineConfig({
  // base: "/haishan-ai/",
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
    svgLoader({
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
      "/stream": {
        target: "http://nls-gateway-cn-shanghai.aliyuncs.com",
        changeOrigin: true,
      },
      "/chat": {
        target: "http://36.212.55.183:7862",
        changeOrigin: true,
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
