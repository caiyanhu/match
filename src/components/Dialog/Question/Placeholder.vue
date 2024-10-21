<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useMiscStore } from "@/store";

const miscStore = useMiscStore();
const { placeholder, isPlaceholderVisible } = storeToRefs(miscStore);
</script>

<template>
  <div
    class="placeholder"
    v-if="placeholder && isPlaceholderVisible">
    {{ placeholder }}
  </div>
</template>

<style scoped lang="scss">
.placeholder {
  font-size: 16px;
  font-weight: 400;
  line-height: 21.12px;
  color: rgb(59, 59, 59, 0.6);
  text-align: left;

  user-select: none;
  -webkit-user-select: none;
}
</style>
