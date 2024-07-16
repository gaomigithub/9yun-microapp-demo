/**
 * Note: 路由配置项
 *
 * path: '/path'                    // 路由路径
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
	title: 'title'                  // 设置该路由在侧边栏的名字
	icon: 'icon-name'                // 设置该路由的图标
	activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
	query: '{"id": 1}'             // 访问路由的默认传递参数
	hidden: true                   // 当设置 true 的时候该路由不会在侧边栏出现 
    hideTab: true                   //当设置 true 的时候该路由不会在多标签tab栏出现
  }
 */

import type { RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";
import Layout from "@/layout/default/index.vue";

export const LAYOUT = () => Promise.resolve(Layout);

export const INDEX_ROUTE_NAME = Symbol();

export const constantRoutes: Array<RouteRecordRaw> = [
  // {
  //     path: PageEnum.ERROR_404,
  //     component: () => import('@/views/error/404.vue')
  // },
  {
    path: PageEnum.ERROR_403,
    component: () => import("@/views/error/403.vue"),
  },
  {
    path: PageEnum.LOGIN,
    component: () => import("@/views/account/login.vue"),
  },
  {
    path: "/user",
    component: LAYOUT,
    children: [
      {
        path: "setting",
        name: Symbol(),
        component: () => import("@/views/user/setting.vue"),
        meta: {
          title: "个人设置",
        },
      },
    ],
  },
];

export const INDEX_ROUTE: RouteRecordRaw = {
  path: PageEnum.INDEX,
  component: LAYOUT,
  name: INDEX_ROUTE_NAME,
};
