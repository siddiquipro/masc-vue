import { createApp } from "vue";

import masc from "../index";

import "./main.css";
import App from "./App.vue";

const app = createApp(App);
app.use(masc);
app.mount("#app");
