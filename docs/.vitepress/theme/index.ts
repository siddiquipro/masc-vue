import "./tailwind.postcss";
import "./app.css";
import DefaultTheme from "vitepress/theme";
import { type Theme } from "vitepress";
import * as components from "masc-vue";

import test from "../../components/test.vue";

export default {
	extends: DefaultTheme,

	enhanceApp({ app }) {
		// Register masc components
		for (const [name, comp] of Object.entries(components)) {
			console.log(name);
			if (!name.startsWith("S")) continue;

			const component = comp as any;
			app.component(name, component);
		}

		// Register custom components
		app.component("test", test);
	},
} satisfies Theme;
