import { createApp } from "vue";

//to import the library from npm do following
// from build folder
// import masc from "../../";
// import "../../dist/style.css";

import masc from "../index";

import "../css/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(masc);
app.mount("#app");
