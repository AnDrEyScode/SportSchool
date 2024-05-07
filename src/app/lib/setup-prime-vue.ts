import "primevue/resources/themes/aura-light-indigo/theme.css";
import "primeicons/primeicons.css";

import type { App } from "vue";

import PrimeVue from "primevue/config";

import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";
import Password from "primevue/password";
import Button from "primevue/button";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import DataView from "primevue/dataview";
import SelectButton from "primevue/selectbutton";

export function setupPrimeComponents({ app }: { app: App }): void {
  app.use(PrimeVue, {
    pt: {
      inputtext: {
        root: "border-2 rounded border-blue",
      },
      button: {
        root: "bg-blue text-white px-5 py-2 border-2 hover:bg-white hover:text-blue hover:border-blue",
      },
      password: {
        root: "border-2 rounded border-blue ",
      },
      panel: {
        //...
        header: {
          class: "bg-blue",
        },
      },
      autocomplete: {
        input: {
          root: "w-16rem", // OR { class: 'w-16rem' }
        },
      },
    },
  });
  const uiLib = [
    Menubar,
    InputText,
    Avatar,
    Password,
    Button,
    Card,
    Carousel,
    Tag,
    DataView,
    SelectButton,
  ];
  uiLib.forEach((c) => {
    console.log(c.name);
    app.component(c.name, c);
  });
}
