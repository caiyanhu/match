<template>
  <div class="container">
    <div class="excalidraw" id="excalidraw"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import React from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";

let root: any = null,
  app: any = null;

let appState: any = {
  // 默认的 appState 配置
  viewBackgroundColor: "#fff", // 画布背景颜色
  currentItemStrokeColor: "#000000", // 当前绘画工具颜色
  currentItemBackgroundColor: "#ffffff", // 当前工具填充颜色
  activeTool: "selection", // 默认工具为选择工具
  zoom: 1, // 缩放比例
};

const handleDrawingChange = (elements, newAppState) => {
  let state = app.getAppState();

  let { collaborators, ...appState } = state;

  // delete state.collaborators;
  localStorage.setItem(
    "excalidrawElements",
    JSON.stringify({ elements, appState: appState })
  );
};

const excalidrawAPI = (e: any) => {
  app = e;
  window.app = e;
};

const initializeExcalidraw = () => {
  const savedElements = localStorage.getItem("excalidrawElements");
  const savedAppState = localStorage.getItem("appState");

  const initialData = savedElements
    ? JSON.parse(savedElements)
    : { elements: [], appState: appState };
  appState = savedAppState ? JSON.parse(savedAppState) : appState;

  const excalidrawElement = React.createElement(Excalidraw, {
    initialData: initialData,
    onChange: handleDrawingChange,
    excalidrawAPI: excalidrawAPI,
    langCode: "zh-CN",
  });

  root = createRoot(document.getElementById("excalidraw"));
  root.render(excalidrawElement);
};

onMounted(() => {
  initializeExcalidraw();
});

onUnmounted(() => {
  // 组件卸载时销毁 Excalidraw 实例
  if (root) {
    root.unmount();
  }
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .header {
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    font-size: 1.2rem;
    background-color: #038fe5;
    color: white;
  }

  .footer {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    background-color: #038fe5;
    color: white;
  }

  .excalidraw {
    flex-grow: 1;
    /* 占满剩余空间 */
    height: 100%;
  }
}
</style>
