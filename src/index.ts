import * as components from "./components";
import { App } from "vue";

export default {
  install(app: App) {
    const entries = Object.entries(components.default);
    entries.forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  },
};

export { SCard, SBtn, SAppbar, SPagination, STable, STableColumn, STableHead } from "./components";
