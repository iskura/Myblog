import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "./plugins/axios";

const app = createApp(App);
app.use(router).use(store).use(Axios).mount("#app");
