/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-06 14:57:49
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-02-05 17:43:28
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "./plugins/axios";

const app = createApp(App);
app.use(router).use(store).use(Axios).mount("#app");
