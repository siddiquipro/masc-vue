import { defineConfig } from "vite";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const name = "index";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: name,
			fileName: (format) => `${name}.${format}.js`,
			cssFileName: "style",
		},
		rollupOptions: {
			external: ["vue", "@vueuse/core", "@iconify/vue"],
			output: {
				exports: "named",
				globals: {
					"vue": "Vue",
					"@vueuse/core": "VueUse",
					"@iconify/vue": "IconifyVue",
				},
			},
		},
	},
	plugins: [vue(), dts({ insertTypesEntry: true })],
});
