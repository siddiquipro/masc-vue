import * as components from "./components";
import "./css/app.css";
import { App } from "vue";

import tooltip from "./directives/tooltip";
import mascPlugin from "./tailwind/masc-plugin";

export default {
	install(app: App) {
		app.directive("tooltip", tooltip);
		for (const [componentName, component] of Object.entries(components)) {
			console.debug(`Registering ${componentName}`);
			app.component(componentName, component);
		}
	},
};

export { useLoading } from "./composables/useLoading";
export { useNotify } from "./composables/useNotify";
export { useWait, getObjectValue } from "./utils/helpers";
export { formatBoolean, formatDate } from "./utils/formatters";

export * from "./components";

export { mascPlugin, tooltip };
