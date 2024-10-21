<script setup lang="ts">
import confetti from "canvas-confetti";
import { onMounted, ref } from "vue";

import RenderModel from "./RenderModel";

const canvasContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (!canvasContainer.value) return;

  const model = new RenderModel("#WebGL-output");
  model.init();
});

// 处理多次点击事件
const handleMultiTouch = () => {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.75 },
  });
};
</script>

<template>
  <div
    id="WebGL-output"
    class="canvas-container"
    ref="canvasContainer"
    v-multi-touch="handleMultiTouch" />
</template>

<style lang="scss" scoped>
.canvas-container {
  width: 100%;
  height: 100%;
}
</style>
