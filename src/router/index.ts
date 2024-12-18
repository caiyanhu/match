import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
