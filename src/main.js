import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@popperjs/core";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//import "./assets/main.css";

import Axios from "axios";
Axios.defaults.baseURL = "https://localhost:8443/CarEvaluation";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
