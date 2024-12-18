<template>
  <div class="wrapper bg-waitroom_bg img relative ">
    <div class="absolute left-[50px] top-[65px] flex space-x-8">
      <div class="bg-back img w-[53px] h-[53px] cursor-pointer"></div>
      <div class="bg-pvp_title img w-[196.21px] h-[48.86px]"></div>
    </div>

    <div
      class="absolute left-[200px] top-[50%] transform -translate-y-1/2 flex items-center justify-center grid grid-rows-2 grid-cols-4 gap-x-16 gap-y-4">
      <div class="flex flex-col items-center justify-center">
        <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
        <div class=""></div>
      </div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
      <div class="bg-empty_avatar img w-[197px] h-[197px]"></div>
    </div>

    <div class="absolute right-0 top-0 bg-right_panel img h-full w-[537px]">

    </div>
  </div>


</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'



onMounted(async () => {
});

</script>



<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
