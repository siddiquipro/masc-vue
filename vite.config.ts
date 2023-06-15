import { defineConfig } from "vite";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

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
      external: ["vue", "tippy.js", "vue-toast-notification"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), dts({ insertTypesEntry: true })],
});
