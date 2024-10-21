<script setup lang="ts">
import { Question, Recorder } from "@/components";
</script>

<template>
  <div class="home-bottom bg-homeBottom">
    <Question />
    <Recorder />
  </div>
</template>

<style lang="scss" scoped>
.home-bottom {
  width: 100vw;
  height: 333px;
  position: fixed;
  bottom: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
}
</style>
