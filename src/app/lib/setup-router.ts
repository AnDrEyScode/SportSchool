import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/pages/HomeView.vue";
import AuthView from "@/pages/AuthView.vue";
import SearchPage from "@/pages/SearchPage.vue";
import AccountPage from "@/pages/AccountPage.vue";
import GroupPage from "@/pages/GroupPage.vue";

export function setupRouter({ app }: { app: App }): void {
  const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_API_BASE_URLL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/auth",
        name: "auth",
        component: AuthView,
      },
      {
        path: "/search",
        name: "search",
        component: SearchPage,
      },
      {
        path: "/account",
        name: "account",
        component: AccountPage,
      },
      {
        path: "/group",
        name: "group",
        component: GroupPage,
      },
    ],
  });
  app.use(router);
}
