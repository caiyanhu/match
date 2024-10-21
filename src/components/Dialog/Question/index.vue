<script setup lang="ts">
import Loading from "./Loading.vue";
import Placeholder from "./Placeholder.vue";
import TextArea from "./TextArea.vue";
</script>

<template>
  <div class="wrapper">
    <Placeholder />
    <Loading />
    <TextArea />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-size: cover;
  position: absolute;
  bottom: 46.66px;
  width: 340px;
  height: 266.85px;
  margin: 0 auto;
  padding: 64px 34px 0;
}
</style>
