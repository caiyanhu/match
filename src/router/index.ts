import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

import Player from "@/components/Players.vue";
import Play from "@/components/PlayUI/index.vue";
import Home from "@/views/Home.vue";
import PvPRoom from "@/views/PvPRoom.vue";
import SelfDefineMap from "@/views/SelfDefineMap.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/self-define-map",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/pvp-room",
    name: "PvPRoom",
    component: PvPRoom,
  },
  {
    path: "/self-define-map",
    name: "SelfDefineMap",
    component: SelfDefineMap,
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
