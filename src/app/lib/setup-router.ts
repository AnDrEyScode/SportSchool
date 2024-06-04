import type { App } from "vue";
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from "vue-router";

import HomeView from "@/pages/HomeView.vue";
import AuthView from "@/pages/AuthView.vue";
import SearchPage from "@/pages/SearchPage.vue";
import AccountPage from "@/pages/AccountPage.vue";
import GroupPage from "@/pages/GroupPage.vue";
import { RoutePaths } from "@/shared/const/route-paths";
import { useUserStore } from "@/entities/user/store";

// const notAuthorizedPages = []

// const userStore = useUserStore()
// const checkAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext ) => {
//   if (userStore.isAuth) {
//     next()
//   } else if ()
// }

export function setupRouter({ app }: { app: App }): void {
  const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_API_BASE_URLL),
    routes: [
      {
        path: RoutePaths.HOME,
        name: "home",
        component: HomeView,
      },
      {
        path: RoutePaths.AUTH,
        name: "auth",
        component: AuthView,
      },
      {
        path: RoutePaths.SEARCH,
        name: "search",
        component: SearchPage,
      },
      {
        path: RoutePaths.ACCOUNT,
        name: "account",
        component: AccountPage,
      },
      {
        path: RoutePaths.GROUP,
        name: "group",
        component: GroupPage,
      },
    ],
  });
  app.use(router);
}
