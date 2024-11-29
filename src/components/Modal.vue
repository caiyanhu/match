<script setup lang="ts">
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string
}>()

const users = ref([
  { name: 'Zhang San', time: '00:23', avatar: 'avatar1.png' },
  { name: 'Li Ming', time: '00:35', avatar: 'avatar2.png' },
  { name: 'Wang Wu', time: '00:37', avatar: 'avatar3.png' }
]);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <VueFinalModal class="flex justify-center items-center"
    content-class="flex flex-col rounded border border-gray-100 dark:border-gray-800"
    @update:model-value="val => emit('update:modelValue', val)">
    <div class="bg-blue-500 p-4 rounded-lg shadow-lg w-80">
      <div class="text-center text-yellow-200 text-lg font-bold mb-4">
        排行榜
      </div>
      <div v-for="(user, index) in users" :key="index" class="flex items-center bg-blue-400 rounded-lg mb-2 p-2">
        <div class="flex items-center justify-center bg-white rounded-full h-12 w-12 mr-4 relative">
          <img :src="user.avatar" alt="avatar" class="rounded-full w-full h-full" />
          <div class="absolute -top-2 -right-2 bg-yellow-400 rounded-full text-xs px-1">
            👑
          </div>
        </div>
        <div class="flex-1 text-white">
          <div class="font-bold text-lg">第{{ index + 1 }}名</div>
          <div>{{ user.name }}</div>
        </div>
        <div class="bg-yellow-400 text-black px-3 py-1 rounded-lg">
          用时 <span class="font-mono">{{ user.time }}</span>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>