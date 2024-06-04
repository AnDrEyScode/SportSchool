import { createPinia } from "pinia";
import type { App } from "vue";

export function setupPinia({ app }: { app: App }) {
  const pinia = createPinia();
  app.use(pinia);
}
