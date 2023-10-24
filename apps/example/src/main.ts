import { createApp } from "vue";

import masc from "masc-vue";
import "masc-vue/style.css";

import "./main.css";
import App from "./App.vue";

const app = createApp(App);
app.use(masc);
app.mount("#app");
