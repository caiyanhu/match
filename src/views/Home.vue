<template>
  <div class="wrapper bg-home_bg img relative flex justify-center items-center">
    <div class="bg-home_title img w-[395px] h-[269.38px] absolute left-[50%] top-0 translate-x-[-50%]"></div>
    <div class="bg-logo img w-[258.7px] h-[47.81px] absolute left-[50px] top-[65px]"></div>

    <div class="flex items-center justify-center h-full space-x-32">
      <div class="bg-pve img w-[570px] h-[374.14px] cursor-pointer"></div>
      <div class="bg-pvp img w-[570px] h-[374.14px] cursor-pointer"></div>
    </div>

    <div class="absolute right-[40px] top-[60px] h-full space-y-10">
      <div class="bg-paihangbang img w-[102px] h-[102px] cursor-pointer" @click="onOpenRankModal()"></div>
      <div class="bg-baoxiang img w-[102px] h-[102px] cursor-pointer" @click="onOpenDaojuModal()"></div>
    </div>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from 'vue-final-modal';

import RankModal from '@/components/RankModal.vue';
import DaojuModal from '@/components/DaojuModal.vue';

const onOpenRankModal = () => {
  const { open } = useModal({
    component: RankModal
  })

  open();
}

const onOpenDaojuModal = () => {
  const { open } = useModal({
    component: DaojuModal
  })

  open();
}

</script>



<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
}

.test {
  width: 46px;
  height: 52px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
