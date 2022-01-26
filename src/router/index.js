/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-03 14:32:47
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-25 22:49:10
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "ss",
    },
  },
  {
    path: "/Music",
    name: "Music",
    meta: {
      title: "|音乐",
    },
    component: () => import("../views/Music.vue"),
  },
  {
    path: "/File",
    name: "File",
    component: () => import("../views/File.vue"),
  },
  {
    path: "/Message",
    name: "Message",
    meta: {
      title: "|留言",
    },
    component: () => import("../views/Message.vue"),
  },
  {
    path: "/Box",
    name: "Box",
    meta: {
      title: "|一些盒子",
    },
    component: () => import("../views/Box.vue"),
  },
  {
    path: "/Sample",
    name: "Sample",
    meta: {
      title: "|Sample",
    },
    component: () => import("../views/Sample.vue"),
  },
  {
    path: "/Something",
    name: "Something",
    meta: {
      name: "|Something",
    },
    component: () => import("../views/Something.vue"),
  },
  {
    path: "/:id",
    name: "Id",
    meta: {
      name: "|:id",
    },
    component: () => import("../components/page/_id.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
