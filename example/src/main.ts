import "./style.css";
import "masc-vue/style.css";
import { createApp } from "vue";
import masc from "masc-vue";
import App from "./App.vue";

const app = createApp(App);
app.use(masc);
app.mount("#app");
