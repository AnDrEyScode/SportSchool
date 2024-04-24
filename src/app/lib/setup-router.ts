import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import type { App } from "vue";

export function setupRouter({ app }: { app: App }): void {
  const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_API_BASE_URLL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  });

  app.use(router);
}
