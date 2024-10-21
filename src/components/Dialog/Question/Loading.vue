<script setup lang="ts">
import { storeToRefs } from "pinia";

import Loading from "@/assets/loading.svg";
import { useMiscStore } from "@/store";

const miscStore = useMiscStore();
const { isSpeechRecognition } = storeToRefs(miscStore);
</script>

<template>
  <div
    v-if="isSpeechRecognition"
    class="loading">
    <Loading />
    库库正在识别中
  </div>
</template>

<style scoped lang="scss">
.loading {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(59, 59, 59, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 45px;
    height: 45px;
    margin-bottom: 5px;
    animation: spin 1500ms ease-in-out infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
