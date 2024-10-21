<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import { requestAnswer } from "@/apis";
import { useMiscStore, useRecordStore } from "@/store";
import { getDeviceType } from "@/utils/device";

const miscStore = useMiscStore();
const recordStore = useRecordStore();
const { isSpeechRecognition, question, placeholder } = storeToRefs(miscStore);
const { isRecording } = storeToRefs(recordStore);

// 是否禁用输入框
const isInputDisabled = computed(() => {
  // 正在录音或正在语音识别时,禁止使用输入框
  if (isRecording.value || isSpeechRecognition.value) {
    return true;
  }
  return false;
});

// 是否允许清空
const isClearAllowed = computed(() => {
  return question.value.length > 0;
});

// 是否允许发送
const isSubmitAllowed = computed(() => {
  return question.value.length > 0;
});

// 清空输入
const resetTextArea = () => {
  miscStore.$patch((state) => {
    state.question = "";
  });
};

// 将文案请求到AI
const submit = async () => {
  if (question.value.length === 0) return;
  try {
    await requestAnswer(question.value);
  } catch (error) {
    if (error instanceof Error) {
      miscStore.$patch((state) => {
        state.isMessagePopupVisible = true;
        state.popupContent = error.message;
      });
    }
  }
};

const inputField = ref<HTMLElement | null>(null);

const toggleHomeMiddleVisibility = (isVisible = true) => {
  miscStore.$patch((state) => {
    state.isHomeMiddleVisible = isVisible;
  });
};

const handleFocus = () => {
  setTimeout(() => {
    // 键盘弹出时页面高度变小,隐藏中间内容
    toggleHomeMiddleVisibility(false);
    // 将Placeholder组件从dom中移除
    miscStore.$patch((state) => {
      state.isPlaceholderVisible = false;
    });
  }, 100); // 延迟处理,等待键盘完全弹出
};

const handleBlur = () => {
  toggleHomeMiddleVisibility(true);
  // 如果用户没有输入且placeholder有值,就显示placeholder
  if (Boolean(question.value) === false && placeholder.value) {
    miscStore.$patch((state) => {
      state.isPlaceholderVisible = true;
    });
  }
};

onMounted(() => {
  // 因为Android与ios在唤起键盘时对webview高度处理不同,所以需要区分机型
  if (getDeviceType().isAndroid) {
    let originHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    // 安卓手机中唤起软键盘时页面会压缩webview的高度，窗口会执行resize事件
    window.addEventListener(
      "resize",
      function () {
        const resizeHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        if (originHeight < resizeHeight) {
          // Android 键盘收起
          handleBlur();
        } else {
          // Android 键盘弹出
          handleFocus();
        }
        originHeight = resizeHeight;
      },
      false,
    );
  }
  if (getDeviceType().isIOS && inputField.value) {
    // ios在唤起键盘时webview不会被压缩,整体往上滚动
    inputField.value.addEventListener("focus", handleFocus);
    inputField.value.addEventListener("blur", handleBlur);
  }
});

onBeforeUnmount(() => {
  if (inputField.value) {
    inputField.value.removeEventListener("focus", handleFocus);
    inputField.value.removeEventListener("blur", handleBlur);
  }
});
</script>

<template>
  <div
    class="textarea"
    v-if="!isSpeechRecognition">
    <textarea
      type="text"
      ref="inputField"
      :disabled="isInputDisabled"
      v-model="question"
      rows="4" />
    <div class="buttons">
      <button
        :style="`${isClearAllowed ? 'color: #697ffe;' : 'color: #ccc;'}`"
        :disabled="!isClearAllowed"
        @click="resetTextArea">
        清空
      </button>
      <button
        :style="`${isSubmitAllowed ? 'color: #697ffe;' : 'color: #ccc;'}`"
        :disabled="!isSubmitAllowed"
        @click="submit">
        发送
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.textarea {
  textarea {
    width: 100%;
    background-color: #fff;
    color: #535353;
    outline-width: 0;

    &:focus {
      border-width: 0;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
