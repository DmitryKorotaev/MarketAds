import { createApp } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLenght } from "@vuelidate/validators";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/scss/bootstrap.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(useVuelidate)
  .use(required, email, minLenght)
  .mount("#app");
