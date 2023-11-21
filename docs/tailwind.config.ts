import daisyui from "daisyui";
import { mascPlugin } from "masc-vue";

export default {
	content: [
		".vitepress/**/*.{js,ts,vue}",
		"./content/**/*.{md,js,ts,vue}",
		"./components/**/*.{js,ts,vue}",
		"./node_modules/masc-vue/**/*.{js,ts,vue}",
	],
	plugins: [daisyui, mascPlugin],
};
