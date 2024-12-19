<script setup lang="ts">
import Back from "./Back/index.vue";
import Prompt from "./Prompt/index.vue";
import Toolbox from "./Toolbox/index.vue";
import PlayArea from "./PlayArea/index.vue";

const props = defineProps({
  isCombat: {
    required: true,
    type: Boolean,
  },
  backTo: {
    required: true,
    type: String,
  },
  levelIndex: {
    required: true,
    type: Number,
  },
});
</script>

<template>
  <div class="ui">
    <Back
      :isCombat="props.isCombat"
      :backTo="props.backTo" />
    <PlayArea :number="12" :boxNumberPerLine="4" />
    <Prompt />
    <Toolbox />
  </div>
</template>

<style lang="css" scoped>
.ui {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("./UI_background.png");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 0;
}
</style>
