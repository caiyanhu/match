import Recorder from "recorder-core";
import "recorder-core/src/engine/wav";

import { ASR_voice, requestAnswer } from "@/apis";
import { useMiscStore, useRecordStore } from "@/store";

let recorder;

function initRecorder() {
  recorder = new Recorder({
    type: "wav",
    sampleRate: 16000,
    bitRate: 16,
  });
}

function grantPermission() {
  const recordStore = useRecordStore();
  recorder.open(
    () => {
      recordStore.$patch((state) => {
        state.hasPermission = true;
        state.permissionErrorMessage = "";
      });
    },
    (msg, isUserNotAllow) => {
      let message = msg;
      if (isUserNotAllow) {
        message = "请允许访问麦克风以进行录音。\n重新扫码进入";
      }
      if (msg.includes("NotFoundError")) {
        message = "未检测到麦克风设备。";
      }
      recordStore.$patch((state) => {
        state.hasPermission = false;
        state.permissionErrorMessage = message;
      });
    },
  );
}

function startRecord() {
  recorder.start();
}

function stopRecord() {
  recorder.stop(
    async (blob) => {
      const miscStore = useMiscStore();
      try {
        // 将音频文件上传到语音转文字接口中
        const question = await ASR_voice(blob);

        if (question) {
          // 如果语音成功识别出文字
          miscStore.$patch((state) => {
            state.question = question;
            state.isSpeechRecognition = false;
          });

          await requestAnswer(question);
        } else {
          miscStore.$patch((state) => {
            state.isSpeechRecognition = false;
            state.placeholder = "未识别出语音,请再次尝试";
            state.isPlaceholderVisible = true;
          });
        }
      } catch (error) {
        miscStore.$patch((state) => {
          state.isMessagePopupVisible = true;
          state.popupContent = error.message;
        });
      }
    },
    (message) => {
      console.error("录音失败:", message);
      destroyRecorder();
    },
  );
}

function closeRecord() {
  recorder.close();
}

function destroyRecorder() {
  recorder.close();
  recorder = null;
}

export {
  destroyRecorder,
  grantPermission,
  initRecorder,
  startRecord,
  stopRecord,
  closeRecord,
};
