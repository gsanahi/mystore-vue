import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProductListView from "../views/ProductListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ProductListView,
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ProfileView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/LoginView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    props: (route) => {
      const id = Number(route.params.id);
      return { id };
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ProductView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
