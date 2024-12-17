<template>
  <VueFinalModal class="flex justify-center items-center" content-class="flex flex-col rounded"
    @update:model-value="val => emit('update:modelValue', val)">
    <div class="bg-daoju_modal bg-no-repeat bg-center img w-[675.82px] h-[737px] space-y-2 relative">
      <div
        class="bg-buy bg-no-repeat bg-center img w-[312.8px] h-[100.8px] relative top-[668px] left-[182px] cursor-pointer">
      </div>

      <div class="cursor-pointer absolute top-[379px] left-[106px] bg-red-500 w-[140px] h-[150px]" @click="onBuyFH()">
      </div>
      <div class="cursor-pointer absolute top-[379px] left-[260px] bg-orange-500 w-[140px] h-[150px]" @click="onBuyYS()"></div>

      <div class="font-lcd text-[20px] absolute bottom-[95px] left-[177px]">{{ FHCount }}</div>
      <div class="font-lcd text-[20px] absolute bottom-[95px] left-[327px]">{{ YSCount }}</div>

    </div>

  </VueFinalModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

defineProps<{
  score: number
}>()

const FHCount = ref(1);
const YSCount = ref(1);

const onBuyFH = () => {
  FHCount.value = FHCount.value + 1;
}
const onBuyYS = () => {
  YSCount.value = YSCount.value + 1;
}

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>
