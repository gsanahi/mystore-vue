import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import ProductListView from "../views/ProductListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
  {
    path: "/",
    name: "list",
    component: ProductListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
