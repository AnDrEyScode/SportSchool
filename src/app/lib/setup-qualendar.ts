import type { App } from "vue";

import "qalendar/dist/style.css";
import { Qalendar } from "qalendar";

export function setupQualendar({ app }: { app: App }): void {
  app.component("qalendar", Qalendar);
}
