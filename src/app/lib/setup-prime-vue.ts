import "primevue/resources/themes/aura-light-indigo/theme.css";
import "primeicons/primeicons.css";

import type { App } from "vue";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

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
import TabMenu from "primevue/tabmenu";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Chart from "primevue/chart";
import Calendar from "primevue/calendar";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import InputNumber from "primevue/inputnumber";

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
        header: {
          class: "bg-blue",
        },
      },
    },
  });
  app.use(ToastService);
  const uiLib = [
    Menubar,
    InputText,
    InputNumber,
    Avatar,
    Password,
    Button,
    SelectButton,
    Card,
    Carousel,
    Tag,
    DataView,
    MultiSelect,
    Image,
    Dropdown,
    Divider,
    TabMenu,
    TabPanel,
    TabView,
    Chart,
    Calendar,
    Toast,
    ProgressSpinner,
    Textarea,
    FileUpload,
  ];
  uiLib.forEach((c) => {
    console.log(c.name);
    app.component(c.name, c);
  });
}
