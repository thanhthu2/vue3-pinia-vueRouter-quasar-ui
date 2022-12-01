import { createRouter, createWebHistory } from "vue-router";
import { routeNames } from "./route-names";
import { ScreenLayout } from "./screen-layouts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: routeNames.home,
      component: () => import("@/modules/auth/page/LoginPage.vue"),
      meta: {
        layout: ScreenLayout.AUTH_LAYOUT,
      },
    },
  ],
});

export default router;
