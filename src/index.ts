import * as components from "./components";
import "vue-final-modal/style.css";
import "./css/app.css";
import { App } from "vue";

export default {
  install(app: App) {
    const entries = Object.entries(components.default);
    entries.forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  },
};

export { useLoading } from "./composables/useLoading";
export { useModal } from "./composables/useModal";
export { wait } from "./utils/helpers";

export { SCard, SBtn, SAppbar, SPagination, STable, STableColumn, STableHead, SModal, SIcon } from "./components";
