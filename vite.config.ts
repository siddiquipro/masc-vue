import { BuildOptions, defineConfig } from "vite";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const isWeb = process.env.WEB;
console.log("Building Mode :::::::::::::::::: ", isWeb ? "Website" : "Library");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: getBuildConfig(),
  plugins: [vue(), dts({ insertTypesEntry: true })],
});

function getBuildConfig(): BuildOptions {
  if (isWeb) return {};

  return {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "masc-vue",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `masc-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "tippy.js", "@vueuse/core"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  };
}
