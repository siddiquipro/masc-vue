import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { mascPlugin } from "masc-vue";

const config = {
	content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/masc-vue/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [daisyui, mascPlugin],
} satisfies Config;

export default config;
