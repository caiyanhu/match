<script lang="ts" setup>
import { ref } from "vue";
import Box from "@/components/PlayUI/Box/index.vue";

const props = defineProps({
  rowNumber: {
    required: true,
    type: Number,
  },
});
</script>

<template>
  <div class="horizontal-road">
    <Box
      :golden-number="2"
      v-for="index in props.rowNumber"
      :key="index"></Box>
  </div>
</template>

<style lang="css" scoped>
.horizontal-road {
  width: 100%;
  height: 30px;
  margin-bottom: 200px;
  background: rgba(255, 241, 227, 0.6);

  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
