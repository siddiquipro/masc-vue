import { defineConfig } from "vite";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "masc-vue",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `masc-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-toast-notification", "tippy.js"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "masc-vue.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue",
          "tippy.js": "tippy.js",
          "vue-toast-notification": "vue-toast-notification",
        },
      },
    },
  },
  plugins: [vue()],
});
