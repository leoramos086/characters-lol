import { createApp } from "vue";
import "./scss/style.scss";
import App from "./App.vue";
import Router from "./router";

createApp(App).use(Router).mount("#app");
