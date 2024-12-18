import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

import Player from "@/components/Players.vue";
import Play from "@/components/PlayUI/index.vue";
import Home from "@/views/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
  },
  {
    path: "/player",
    name: "Player",
    component: Player,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
