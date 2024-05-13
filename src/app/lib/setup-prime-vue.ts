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
import MultiSelect from "primevue/multiselect";
import Image from "primevue/image";
import Dropdown from "primevue/dropdown";
import Divider from "primevue/divider";

export function setupPrimeComponents({ app }: { app: App }): void {
  app.use(PrimeVue, {
    pt: {
      inputtext: {
        root: "border-2 rounded border-blue",
      },
      button: {
        root: "box-border bg-blue text-white px-5 py-2 border border-white hover:bg-white hover:text-blue hover:border-blue hover:border",
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
    MultiSelect,
    Image,
    Dropdown,
    Divider,
  ];
  uiLib.forEach((c) => {
    console.log(c.name);
    app.component(c.name, c);
  });
}
