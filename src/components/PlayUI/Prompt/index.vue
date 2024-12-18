<script setup lang="ts">
import { ref } from "vue";
import RobotIcon from "./assets/robot.svg";
import GeniusIcon from "./assets/GENIUS.svg";
import NextIcon from "./assets/next.svg";

const isDialogVisible = ref(true);
// 当前提示语的序号
const currentPromptIndex = ref(1);

const prompts = ["aaaaaaaaaaa", "bbbbbbbbbbb", "ccccccccccc"];

const clickRobot = () => {
  isDialogVisible.value = true;
};

const handleSkip = () => {
  isDialogVisible.value = false;
};

const handleNext = () => {
  currentPromptIndex.value += 1;
  if (currentPromptIndex.value >= prompts.length) {
    currentPromptIndex.value = prompts.length;
  }
};
</script>

<template>
  <div class="prompt">
    <div
      class="robot"
      @click="clickRobot">
      <RobotIcon />
    </div>
    <div
      class="right"
      v-if="isDialogVisible">
      <div class="top">
        <div class="title">
          <GeniusIcon />
        </div>
        <div
          class="button"
          @click="handleSkip">
          跳过
        </div>
      </div>
      <div class="dialog">
        <div class="prompt-visible-area">
          {{ prompts[currentPromptIndex - 1] }}
        </div>
        <div
          class="next"
          @click="handleNext">
          <NextIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.prompt {
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  .robot {
    width: 396px;
    height: 396px;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    height: 210px;
    position: relative;
    top: -50px;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      .title {
        width: 144px;
        height: 29px;
      }

      .button {
        width: 104px;
        height: 46px;
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        background-image: url("./assets/button.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .dialog {
      width: 890px;
      height: 157px;
      background-image: url("./assets/dialog.svg");
      background-size: cover;
      padding: 26px 47px 29px 57px;

      display: flex;
      align-items: flex-end;

      .prompt-visible-area {
        width: 100%;
        height: 100%;
        text-align: left;
        color: #fff;
      }

      .next {
        cursor: pointer;
        width: 43px;
        height: 38px;
      }
    }
  }
}
</style>
