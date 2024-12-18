<script lang="ts" setup>
import AffixIcon from "./assets/affix.svg";
</script>

<template>
  <div class="play-area">
    <div class="left-top">
      <AffixIcon />
    </div>
    <div class="right-top">
      <AffixIcon />
    </div>
    <div class="left-bottom">
      <AffixIcon />
    </div>
    <div class="right-bottom">
      <AffixIcon />
    </div>
  </div>
</template>

<style lang="css" scoped>
.play-area {
  background-color: rgba(0, 0, 0, 0.6);
  width: 800px;
  height: 800px;
  border-radius: 12px;

  position: absolute;
  top: 189px;
  left: 567px;

  .left-top {
    position: absolute;
    top: 25px;
    left: 28px;
  }

  .left-bottom {
    position: absolute;
    bottom: 25px;
    left: 28px;
  }

  .right-top {
    position: absolute;
    top: 25px;
    right: 28px;
  }

  .right-bottom {
    position: absolute;
    bottom: 25px;
    right: 28px;
  }
}
</style>
