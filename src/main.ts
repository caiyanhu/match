import "./style.css";
import 'ant-design-vue/dist/reset.css';
import 'vue-final-modal/style.css';

import VueCountdown from '@chenfengyuan/vue-countdown';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import Antd from 'ant-design-vue';
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createVfm } from 'vue-final-modal';

import directives from "@/directives";
import router from "@/router";

import App from "./App.vue";

const pinia = createPinia();
const vfm = createVfm();
const app = createApp(App);

app.use(vfm);
app.use(Antd);
app.use(autoAnimatePlugin);
app.use(router);
app.use(pinia);
app.use(directives);
app.component(VueCountdown.name, VueCountdown);
app.mount("#app");
