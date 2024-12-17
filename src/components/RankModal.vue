<template>
  <VueFinalModal class="flex justify-center items-center" content-class="flex flex-col rounded"
    @update:model-value="val => emit('update:modelValue', val)">
    <div class="bg-rank_modal bg-no-repeat bg-center img relative top-[-100px] w-[810px] h-[923px] space-y-2">
      <RankItem :name="'dingyihui'" class="relative top-[390px] left-[114px]"></RankItem>
      <RankItem :name="'chenjiongyan'" class="relative top-[390px] left-[114px]"></RankItem>
      <RankItem :name="'caiyanhu'" class="relative top-[390px] left-[114px]"></RankItem>
      <RankItem :name="'mipengxiang'" class="relative top-[390px] left-[114px]"></RankItem>
      <RankItem :name="'zhangwenlin'" class="relative top-[390px] left-[114px]"></RankItem>
    </div>

  </VueFinalModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';
import RankItem from './RankItem.vue';

defineProps<{
  title?: string
}>()



const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>
