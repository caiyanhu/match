<script setup lang="ts">
import { useRouter } from "vue-router";
import BackIcon from "./assets/back.svg";
import CombatIcon from "./assets/combat.svg";
import BreakLevelIcon from "./assets/breakLevel.svg";

const router = useRouter();
const props = defineProps({
  isCombat: {
    required: true,
    type: Boolean,
  },
  backTo: {
    required: true,
    type: String,
  },
});

const goBack = () => {
  router.push({
    path: props.backTo,
  });
};
</script>

<template>
  <div
    class="back"
    @click="goBack">
    <div class="icon">
      <BackIcon />
    </div>
    <div class="title">
      <CombatIcon v-if="isCombat" />
      <BreakLevelIcon v-if="!isCombat" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.back {
  position: relative;
  left: 77px;
  top: 64px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 36px;
    width: 54px;
    height: 54px;
  }
  .title {
    height: 54px;
  }
}

.back:hover {
  cursor: pointer;
}
</style>
