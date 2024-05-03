import "primevue/resources/themes/aura-light-indigo/theme.css";
import "primeicons/primeicons.css";

import type { App } from "vue";

import PrimeVue from "primevue/config";

import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Password from "primevue/password";
import Button from "primevue/button";

export function setupPrimeComponents({ app }: { app: App }): void {
  app.use(PrimeVue, {
    pt: {
      inputtext: {
        root: "bg-blue-50 text-blue-900",
        class: "bg-blue-50 text-blue-900",
      },
      panel: {
        //...
        header: {
          class: "bg-primary-400",
        },
      },
      autocomplete: {
        //...
        input: {
          root: "w-16rem", // OR { class: 'w-16rem' }
        },
      },
      //...
    },
  });
  const uiLib = [Menubar, InputText, Avatar, Password, Button];
  uiLib.forEach((c) => {
    console.log(c.name);
    app.component(c.name, c);
  });
}
