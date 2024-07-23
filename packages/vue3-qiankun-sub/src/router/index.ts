import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/cat",
    name: "Cat",
    component: () => import("@/views/cat"),
  },
  {
    path: "/dog",
    name: "Dog",
    component: () => import("@/views/dog"),
  },
];

console.log("from router index:: ", {
  __POWERED_BY_QIANKUN__: qiankunWindow.__POWERED_BY_QIANKUN__,
});

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/microapp/vue" : "/"
  ), // 微应用要嵌入到主应用中，/xxx取得是主应用注册微应用时activeRule
  routes,
});

export default router;
