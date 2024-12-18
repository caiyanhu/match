import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("recorder", () => {
  // 录音器是否获得权限
  const hasPermission = ref<boolean | null>(null);
  // 未获取权限时的错误信息
  const permissionErrorMessage = ref("");

  // 是否录音中
  const isRecording = ref(false);
  // 开始录音时间
  const recordTimestamp = ref(Date.now());

  return {
    hasPermission,
    permissionErrorMessage,
    isRecording,
    recordTimestamp,
  };
});
