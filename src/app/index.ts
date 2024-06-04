import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { setupPrimeComponents } from "./lib/setup-prime-vue";
import { setupRouter } from "./lib/setup-router";
import { setupQualendar } from "./lib/setup-qualendar";
import { setupFirebase } from "./lib/setup-firebase";
import { setupPinia } from "./lib/setup-pinia";

export function setupApp() {
  const app = createApp(App);

  setupPrimeComponents({ app });
  setupRouter({ app });
  setupPinia({ app });
  setupQualendar({ app });
  setupFirebase();

  app.mount("#app");
}
