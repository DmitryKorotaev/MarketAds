import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss";

createApp(App).use(store).use(router).mount("#app");
