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
		},
		rollupOptions: {
			external: ["vue", "@vueuse/core", "tippy.js", "@iconify/vue"],
			output: {
				globals: {
					"vue": "Vue",
					"@vueuse/core": "VueUse",
					"tippy.js": "tippy",
					"@iconify/vue": "IconifyVue",
				},
			},
		},
	},
	plugins: [vue(), dts({ insertTypesEntry: true })],
});
