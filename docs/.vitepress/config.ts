import { defineConfig, postcssIsolateStyles } from "vitepress";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import sidebar from "./sidebar";
import head from "./head";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "en-US",
	title: "MASC Vue",
	description:
		"MASC Vue 3 Components are open-source UI component library for building high-quality, design systems and web apps using vue, daisyui and tailwindcss",
	srcDir: "content",
	head: head,
	themeConfig: {
		logo: "/logo.svg",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Docs", link: "/overview/getting-started" },
			{ text: "Components", link: "/components/button" },
		],

		sidebar: sidebar,

		socialLinks: [
			{ icon: "github", link: "https://github.com/siddiquipro/masc-vue" },
			{
				icon: {
					svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 10v4h2v-3h1v3h1v-4H4m5 0v5h2v-1h2v-4H9m3 1v2h-1v-2h1m2-1v4h2v-3h1v3h1v-3h1v3h1v-4h-6M3 9h18v6h-9v1H8v-1H3V9Z"/></svg>',
				},
				link: "https://www.npmjs.com/package/masc-vue",
			},
		],

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2023-present Mohammad Siddiqui",
		},
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
