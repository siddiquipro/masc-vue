import "./tailwind.postcss";
import "./app.css";
import "masc-vue/style.css";

import DefaultTheme from "vitepress/theme";
import { type Theme } from "vitepress";
import * as components from "masc-vue";

import SComp from "../../components/s-comp.vue";

export default {
	extends: DefaultTheme,

	enhanceApp({ app }) {
		// Register masc components
		for (const [name, comp] of Object.entries(components)) {
			if (!name.startsWith("S")) continue;
			const component = comp as any;
			app.component(name, component);
		}

		// Register custom components
		app.component("s-comp", SComp);
	},
} satisfies Theme;
