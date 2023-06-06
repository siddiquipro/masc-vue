import { createApp } from "vue";

import masc from "../index";

import App from "./App.vue";
import "../_css/index.css";

const app = createApp(App);
app.use(masc);
app.mount("#app");
