<script setup lang="ts">
import MedBottleIcon from "./assets/medBottle.svg";
import HourBottleIcon from "./assets/hourBottle.svg";
import StoreIcon from "./assets/store.svg";
import ToolItem from "./toolItem.vue";
</script>

<template>
  <div class="toolbox">
    <ToolItem>
      <MedBottleIcon />
      <div class="description">提示x1</div>
    </ToolItem>
    <ToolItem>
      <HourBottleIcon />
      <div class="description">延长时间x2</div>
    </ToolItem>
    <ToolItem>
      <StoreIcon />
      <div class="description">道具商店</div>
    </ToolItem>
  </div>
</template>

<style lang="css" scoped>
@font-face {
  font-family: "Let go";
  src: url("./assets/fonts/LCD.ttf") format("truetype");
}

.toolbox {
  position: absolute;
  bottom: 73px;
  right: 20px;
  display: flex;

  .description {
    font-size: 24px;
    color: #fff;
    position: absolute;
    bottom: -18px;

    font-family: "Let go", sans-serif;
  }
}
</style>
