import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome';

import Toaster from '@meforma/vue-toaster';

import "@/css/site.css";
import "@/css/colores.css";

import setupInterceptors from './services/setupInterceptors';
setupInterceptors(store);

createApp(App)
  .use(router)
  .use(store)
  .use(Toaster)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");