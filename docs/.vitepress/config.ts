import { defineConfig, postcssIsolateStyles } from "vitepress";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "en-US",
	title: "MASC",
	description: "MASC Vue 3 Components based on daisyui and tailwindcss",
	srcDir: "content",
	head: [["link", { rel: "icon", href: "/logo.svg" }]],
	themeConfig: {
		logo: "/logo.svg",
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
	sitemap: {
		hostname: "https://masc-vue.netlify.app",
	},
	appearance: "dark",
});
