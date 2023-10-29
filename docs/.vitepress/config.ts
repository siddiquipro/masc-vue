import { defineConfig, postcssIsolateStyles } from "vitepress";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "MASC",
	description: "MASC Vue Components based on daisyui and tailwindcss",
	srcDir: "content",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Docs", link: "/overview/getting-started" },
			{ text: "Components", link: "/components/button" },
		],

		sidebar: sidebar,

		socialLinks: [{ icon: "github", link: "https://github.com/mohammadsiddiqui/masc-vue" }],
	},
	vite: {
		css: {
			postcss: {
				plugins: [tailwind(), autoprefixer(), postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] })],
			},
		},
	},
});
