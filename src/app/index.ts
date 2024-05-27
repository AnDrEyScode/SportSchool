import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { setupPrimeComponents } from "./lib/setup-prime-vue";
import { setupRouter } from "./lib/setup-router";
import { setupQualendar } from "./lib/setup-qualendar";

export function setupApp() {
  const app = createApp(App);

  setupPrimeComponents({ app });
  setupRouter({ app });
  setupQualendar({ app });

  app.mount("#app");
}
