<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useMiscStore } from "@/store";

import Loading from "./Loading.vue";

const miscStore = useMiscStore();
const { answer, isAnalyzing } = storeToRefs(miscStore);
</script>

<template>
  <div class="answer-wrapper bg-answerContainer">
    <Loading />
    <span v-if="!isAnalyzing">{{ answer }}</span>
  </div>
</template>

<style scoped lang="scss">
.answer-wrapper {
  position: absolute;
  right: 32px;
  width: 170px;
  height: 168px;
  background-position: center;
  background-size: cover;
  padding: 14px 16px 16px 34px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #535353;
  display: flex;
  text-align: left;
  overflow-y: auto;
  white-space: pre-line;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
