import axios, { AxiosError } from "axios";

import { useMiscStore } from "@/store";

// 将语音文件识别为文字
async function ASR_voice(blob: Blob) {
  const url = `/stream/v1/asr?appkey=mjfewXjiA56WMRqU`;

  const headers = {
    "X-NLS-Token": `74dfba510a7e47989207bdfeeb5a23ed`,
  };
  const formData = new FormData();
  formData.append("file", blob, "1.wav");

  try {
    type Response = {
      data: {
        message: string;
        result: string;
        status: number;
      };
    };
    const response: Response = await axios.post(url, formData, {
      headers: headers,
    });
    return response.data?.result;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      return error.message;
    }
    return "";
  }
}

// 将文字形式的问题发送给AI回答
async function requestAnswer(question: string) {
  const url = `/chat/knowledge_base_chat`;
  const miscStore = useMiscStore();

  try {
    type Response = {
      data: {
        code: number;
        message: string;
        data: string;
      };
    };
    type Result = {
      answer: string;
    };

    miscStore.$patch((state) => {
      state.isAnalyzing = true;
    });

    const response: Response = await axios.post(
      url,
      {
        query: question,
        knowledge_base_name: "he3db",
        use_rerank: false,
        top_k: 3,
        score_threshold: 1,
        stream: false,
        model_name: "openai-api",
        temperature: 0.7,
        max_tokens: 0,
        return_length: 200,
        prompt_name: "default-system-role",
        system_role: "你是一名专业的DBA",
      },
      {
        timeout: 20000,
      },
    );

    const result: Result = JSON.parse(response.data.data);

    miscStore.$patch((state) => {
      state.isAnalyzing = false;
      state.answer = result.answer || "抱歉,暂未能为你找到答案";
    });
  } catch (error) {
    const miscStore = useMiscStore();
    miscStore.$patch((state) => {
      state.isAnalyzing = false;
      state.answer = "您好，有什么想问库库的，我都可以为你解答！";
    });
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
    throw error;
  }
}

export { ASR_voice, requestAnswer };
