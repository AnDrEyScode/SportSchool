import Menubar from "primevue/menubar";
import type { App } from "vue";

export function setupPrimeComponents({ app }: { app: App }): void {
  const uiLib = [Menubar];
  uiLib.forEach((c) => {
    app.component(c.name, c);
  });
  app.component("app-menubar", Menubar);
}
