import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("misc", () => {
  // 首页中部的可见性,当提问框唤起键盘时进行隐藏
  const isHomeMiddleVisible = ref(true);

  // 通过输入或语音转换生成的问题
  const question = ref("");
  // 输入框placeholder
  const placeholder = ref("您可以通过输入或按下按钮说话的方式向我提问");
  // placeholder是否可见
  const isPlaceholderVisible = ref(true);

  // 回复框中的内容,有初始值
  const answer = ref(
    "你好呀，我是库库，代表移动云数据库的安全可靠和先进技术。你也可以点击按钮和我对话哦～",
  );

  // 错误弹窗的可见性及错误内容
  const isMessagePopupVisible = ref(false);
  const popupContent = ref("");

  // 是否正在识别语音
  const isSpeechRecognition = ref(false);
  // 是否正在分析问题
  const isAnalyzing = ref(false);

  return {
    isHomeMiddleVisible,
    question,
    placeholder,
    answer,
    isMessagePopupVisible,
    popupContent,
    isSpeechRecognition,
    isAnalyzing,
    isPlaceholderVisible,
  };
});
