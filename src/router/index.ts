import { createRouter, createWebHistory, Router } from "vue-router";

import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
