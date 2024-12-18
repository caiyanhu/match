<template>
  <div class="tool-item">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.tool-item {
  width: 138px;
  height: 138px;
  background-image: url("./assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
</style>
