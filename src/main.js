import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// gsap套件
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

import "@/assets/css/all.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
