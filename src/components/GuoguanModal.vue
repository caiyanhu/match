<template>
  <VueFinalModal class="flex justify-center items-center" content-class="flex flex-col rounded"
    @update:model-value="val => emit('update:modelValue', val)">
    <div class="bg-guoguan_modal bg-no-repeat bg-center img relative top-[-100px] w-[648px] h-[956.16px] space-y-2">
      <div class="bg-star1 img w-[106px] h-[106px] relative top-[498px] left-[137px]"></div>
      <div class="bg-star2 img w-[106px] h-[106px] relative top-[350px] left-[271px]" v-if="score >= 2"></div>
      <div class="bg-star3 img w-[106px] h-[106px] relative top-[268px] left-[404px]" v-if="score >= 3"></div>

      <div class="font-lcd relative top-[504px] left-[282px] text-[72px] text-[#185EDA]">31640</div>
    </div>

  </VueFinalModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

defineProps<{
  score: number
}>()



const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>
