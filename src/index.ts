import * as components from "./components";
import "vue-final-modal/style.css";
import { App } from "vue";

export default {
  install(app: App) {
    const entries = Object.entries(components.default);
    entries.forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  },
};

export { SCard, SBtn, SAppbar, SPagination, STable, STableColumn, STableHead, SModal } from "./components";
