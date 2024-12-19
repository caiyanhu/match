<script lang="ts" setup>
import { computed } from "vue";

import Road from "@/components/PlayUI/Road/index.vue";

const props = defineProps({
  number: {
    required: true,
    type: Number,
  },
  boxNumberPerLine: {
    required: true,
    type: Number,
  },
});
// 通过数量确定行数
const lineNumber = computed(() => {
  return Math.ceil(props.number / props.boxNumberPerLine);
});
</script>

<template>
  <div class="play-area">
    <div class="main-area">
      <Road
        :rowNumber="props.boxNumberPerLine"
        v-for="index in lineNumber"
        :key="index"></Road>
    </div>
  </div>
</template>

<style lang="css" scoped>
.play-area {
  background-image: url("./assets/play-area-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 1341px;
  height: 610px;
  overflow-y: auto;

  position: absolute;
  top: 125px;
  left: 80px;

  padding: 60px 28px;

  .main-area {
    width: 100%;
  }
}
</style>
