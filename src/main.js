// cmt cua project thi coi trg commit Remove unecessary comments a

import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import router from "@/router/index";

import "@/assets/css/style.css";
import "@/assets/css/queries.scss";
import "@/assets/css/transitions.css";

import "@/assets/css/theme-color/white-theme.css";
import "@/assets/css/theme-color/blue-theme.css";
import "@/assets/css/theme-color/teal-theme.css";
import "@/assets/css/theme-color/purple-theme.css";

import App from "@/App";

const app = createApp(App);

app.use(MotionPlugin);
app.use(router);

app.mount("#app");
