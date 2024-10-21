<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// let headerHeight = ref(0);

// onMounted(() => {
//   const totalHeight =
//     document.getElementsByClassName("bg-ap_page_bg")[0].clientHeight;
//   const cardHeight =
//     document.getElementsByClassName("ap-card-bg")[0].clientHeight;

//   headerHeight.value = totalHeight - cardHeight;
// });
</script>

<template>
  <div class="w-screen h-screen bg-ap_content bg-cover bg-no-repeat bg-bottom">
    <div class="flex justify-center items-center">
      <div class="arrow bg-arrow bg-center bg-cover bg-no-repeat cursor-pointer" @click="router.replace('/home')"></div>
      <div class="title bg-ap_title bg-center bg-cover bg-no-repeat"></div>
    </div>

    <!-- <div
      class="ap-card-bg absolute bottom-0 bg-ap_card_bg bg-bottom bg-contain bg-no-repeat flex justify-center items-end overflow-hidden">
      <div class="ap-content bg-ap_content bg-center bg-contain bg-no-repeat"></div>
    </div> -->

    <div class="ap-ip fixed bg-ip_ap bg-center bg-contain bg-no-repeat"></div>
  </div>
</template>

<style scoped>
.header {
  padding-top: 20px;
}

.title {
  width: calc(636px / 2);
  height: calc(280px / 2);
}

.ap-card-bg {
  width: calc(786px / 2);
  height: calc(1224px / 2);
  padding-bottom: 16px;
}

.ap-content {
  width: calc(740px / 2);
  height: calc(1070px / 2);
}

.ap-ip {
  height: 180px;
  width: 393px;
  bottom: 366px;
  left: 0px;
  z-index: 20;
}
</style>
