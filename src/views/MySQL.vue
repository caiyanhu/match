<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// let headerHeight = ref(0);

// onMounted(() => {
//   const totalHeight =
//     document.getElementsByClassName("bg-mysql_page_bg")[0].clientHeight;
//   const cardHeight = document.getElementsByClassName("card-bg")[0].clientHeight;

//   headerHeight.value = totalHeight - cardHeight;
// });
</script>

<template>
  <div class="w-screen h-screen bg-mysql_content bg-cover bg-no-repeat bg-bottom">
    <div class="header flex justify-center items-center">
      <div class="arrow bg-arrow bg-center bg-cover bg-no-repeat cursor-pointer" @click="router.replace('/home')"></div>
      <div class="title bg-mysql_title bg-center bg-cover bg-no-repeat"></div>
    </div>

    <!-- <div
      class="card-bg absolute bottom-0 bg-mysql_card_bg bg-bottom bg-contain bg-no-repeat flex justify-center items-center overflow-hidden">
      <div class="content bg-mysql_content bg-center bg-contain bg-no-repeat"></div>
    </div> -->

    <div class="mysql-ip fixed bg-ip_mysql bg-center bg-contain bg-no-repeat">
    </div>
  </div>
</template>

<style scoped>
.header {
  padding-top: 20px;
}

.title {
  width: calc(404px / 2);
  height: calc(168px / 2);
}

.mysql-ip {
  height: 250px;
  width: 250px;
  bottom: 351px;
  left: 161px;
}
</style>
