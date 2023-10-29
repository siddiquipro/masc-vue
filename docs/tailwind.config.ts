import daisyui from "daisyui";
import { mascPlugin } from "masc-vue";

export default {
	content: [".vitepress/**/*.{js,ts,vue}", "./content/**/*.md", ".components/**/*.{js,ts,vue}", "./node_modules/masc-vue/**/*.js"],
	plugins: [daisyui, mascPlugin],
};
