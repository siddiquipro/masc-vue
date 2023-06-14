import { createApp } from "vue";

//to import the library from npm do following
// import masc from "masc-vue";
// import "masc-vue/style.css"

import masc from "../index";
import App from "./App.vue";
import "../css/index.css";

const app = createApp(App);
app.use(masc);
app.mount("#app");
