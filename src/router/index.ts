import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { App } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/login/Login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

export function setupRouter(app: App) {
  app.use(router);
}
