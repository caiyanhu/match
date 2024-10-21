<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted } from "vue";

import PauseIcon from "@/assets/pause.svg";
import RecorderIcon from "@/assets/recorder.svg";
import { useMiscStore, useRecordStore } from "@/store";

import {
  closeRecord,
  destroyRecorder,
  grantPermission,
  initRecorder,
  startRecord,
  stopRecord,
} from "./RecorderCore.js";

const miscStore = useMiscStore();
const recordStore = useRecordStore();
const { isRecording, hasPermission, permissionErrorMessage } =
  storeToRefs(recordStore);

// 是否展示声纹动画

onMounted(() => {
  initRecorder();
  grantPermission();
});

onUnmounted(() => {
  destroyRecorder();
});

// 录音按钮或暂停按钮点击的回调
const handleClick = () => {
  if (!isRecording.value) {
    /**
     * 如果当前状态为"未录音"
     * 首先判断录音权限,无权限时中断流程
     * 点击后需变成"录音中"
     * 修改输入框中的placeholder,改为"请说话… 再次按下按钮时停止录音~"
     * 调用输入框的清空按钮
     * 置灰输入框中的"清空" "发送"按钮
     * 开始录音,记录开始录音的时间
     */
    if (
      Boolean(hasPermission.value) === false &&
      permissionErrorMessage.value
    ) {
      miscStore.$patch((state) => {
        state.isMessagePopupVisible = true;
        state.popupContent = permissionErrorMessage.value;
      });
    } else {
      recordStore.$patch((state) => {
        state.isRecording = true;
        state.recordTimestamp = Date.now();
      });
      miscStore.$patch((state) => {
        state.placeholder = "请说话… 再次按下按钮时停止录音~";
        state.question = "";
      });
      startRecord();
    }
  } else {
    /**
     * 如果当前状态为"录音中"
     * 点击后需变成"未录音"
     * 将当前时间与开始录音时间进行比较,小于1s时进行弹窗提醒,提醒内容为"说话时间太短",中止流程
     * 修改输入框中的placeholder,改为"库库正在识别中",在输入框区域显示loading
     * 停止录音
     * 调用语音识别接口
     * 将接口返回上屏到输入框,"清空" "发送"可用
     */
    const now = Date.now();
    if (now - recordStore.recordTimestamp < 1000) {
      miscStore.$patch((state) => {
        state.isMessagePopupVisible = true;
        state.popupContent = "说话时间太短";
      });
      recordStore.$patch((state) => {
        state.isRecording = false;
      });
      closeRecord();
    } else {
      miscStore.$patch((state) => {
        state.placeholder = "";
        state.isSpeechRecognition = true;
      });
      recordStore.$patch((state) => {
        state.isRecording = false;
      });
      stopRecord();
    }
  }
};
</script>

<template>
  <div class="wrapper">
    <div
      :class="`recorder-icon ${isRecording ? 'bg-voiceWave' : 'bg-voiceWaveInit'}`">
      <RecorderIcon
        v-if="!isRecording"
        v-record="handleClick" />
      <PauseIcon
        v-if="isRecording"
        v-record="handleClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;

  .recorder-icon {
    display: flex;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-position: top;
  }
}
</style>
