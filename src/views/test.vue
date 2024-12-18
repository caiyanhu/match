<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from 'vue-final-modal'

import AutoAnimateTest from '@/components/AutoAnimateTest.vue';
import RankModal from '@/components/RankModal.vue';
import GuoguanModal from '@/components/GuoguanModal.vue';

import CountDown from '../components/CountDown.vue';
import SoundTest from '../components/SoundTest.vue';
import Excalidraw from '../components/Excalidraw.vue';
import DaojuModal from '../components/DaojuModal.vue';

const onTimeEnd = () => {
}

const { open } = useModal({
  // component: RankModal
  component: GuoguanModal
  // component: DaojuModal
})
</script>

<template>
  <div class="wrapper bg-home1">
    <!-- <Excalidraw></Excalidraw> -->

    <!-- <SoundTest></SoundTest>

    <div class="animate-fade-up animate-infinite">
      Hej, look at me!
    </div>

    <CountDown @timeEnd="onTimeEnd"></CountDown>

    <AutoAnimateTest></AutoAnimateTest> -->

    <button @click="() => open()">Open</button>
    <CountDown @timeEnd="onTimeEnd"></CountDown>

    <!-- <div class="test bg-18" style="width: 46px;  height: 52px;"></div>
    <div class="test bg-182"></div> -->
  </div>


</template>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.test {
  width: 46px;
  height: 52px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
