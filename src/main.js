import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import { createPinia } from "pinia";
import router from "../src/router/index.js";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount("#app");
