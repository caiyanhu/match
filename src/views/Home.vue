<script setup lang="ts">
import { storeToRefs } from "pinia";

import { HomeBottom, HomeMiddle, HomeTop, MessagePopup } from "@/components";
import { useMiscStore } from "@/store";

const miscStore = useMiscStore();
const { isMessagePopupVisible, popupContent } = storeToRefs(miscStore);

// 关闭错误信息弹窗
const closeMessagePopup = () => {
  miscStore.$patch((state) => {
    state.isMessagePopupVisible = false;
  });
};

// 禁止显示右键菜单
document.addEventListener(
  "contextmenu",
  function (event: MouseEvent | TouchEvent) {
    event.preventDefault();
  },
);
</script>

<template>
  <div class="wrapper bg-home">
    <HomeTop />
    <HomeMiddle />
    <HomeBottom />
    <MessagePopup
      @close="closeMessagePopup"
      :message="popupContent"
      :duration="1.5"
      :visible="isMessagePopupVisible" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
