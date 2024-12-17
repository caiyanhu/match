<template>
  <div class="bg-no-repeat flex justify-around items-center" :style="{ width: `${size}px`, height: `${size}px` }"
    v-html="getMultiavatarSvg(name)">

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import multiavatar from '@multiavatar/multiavatar';

defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
});

const getMultiavatarSvg = (avatarId) => {
  return multiavatar(`${avatarId}`)
}
</script>

<style lang="scss" scoped></style>
