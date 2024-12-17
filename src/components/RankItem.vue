<template>
  <div class="bg-ri_bg bg-no-repeat img w-[644px] h-[88px] flex justify-around items-center border-0">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <Avatar :name="name" :size="70"></Avatar>
        <span>{{ name }}</span>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <div class="img bg-ri_fenshu w-[25px] h-[25px]" />
      <span class="text-[#185DDA]">204563</span>
    </div>

    <div class="flex items-center gap-2">
      <div class="img bg-ri_yongshi w-[25px] h-[25px]" />
      <span class="text-[#185DDA]">用时： 12: 39</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from './Avatar.vue';

defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped></style>
