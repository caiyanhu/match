<script setup lang="ts">
import { storeToRefs } from "pinia";

import { Answer } from "@/components";
import { useMiscStore } from "@/store";

import Model from "./Model.vue";

const miscStore = useMiscStore();
const { isHomeMiddleVisible } = storeToRefs(miscStore);
</script>

<template>
  <div
    class="home-middle"
    v-if="isHomeMiddleVisible">
    <Model />
    <Answer />
  </div>
</template>

<style scoped lang="scss">
.home-middle {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 206px;

  display: flex;
}
</style>
