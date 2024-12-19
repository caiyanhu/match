<script lang="ts" setup>
import { ref } from "vue";
import BoxIcon from "./assets/box.svg";
import OpenedBoxIcon from "./assets/openedBox.svg";
import GoldenIcon from "./assets/golden.svg";

const props = defineProps({
  // 金币数
  goldenNumber: {
    required: true,
    type: Number,
  },
});

const isOpen = ref(false);

const handleClickBox = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="box"
    @click="handleClickBox">
    <div class="box-container">
      <OpenedBoxIcon v-if="isOpen" />
      <BoxIcon v-else />
    </div>
    <div class="golden">
      <GoldenIcon />
      {{ goldenNumber }}
    </div>
  </div>
</template>

<style lang="css" scoped>
.box {
  width: 107px;
  height: 107px;

  .box-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .golden {
    background-image: url("./assets/icon_background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "LCD";
    font-size: 24px;
    color: #fff;
  }
}
</style>
