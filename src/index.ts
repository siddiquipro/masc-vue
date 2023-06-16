import * as components from "./components";
import "vue-final-modal/style.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "./css/app.css";
import { App } from "vue";

import tooltip from "./directives/tooltip";

export default {
  install(app: App) {
    app.directive("tooltip", tooltip);
    const entries = Object.entries(components.default);
    entries.forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  },
};

export { useLoading } from "./composables/useLoading";
export { useNotify } from "./composables/useNotify";
export { wait } from "./utils/helpers";

export { SCard, SBtn, SAppbar, SPagination, STable, STableColumn, STableHead, SModal, SIcon, SFormitem } from "./components";
