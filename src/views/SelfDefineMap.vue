<template>
  <div class="wrapper bg-waitroom_bg img relative ">
    <Excalidraw></Excalidraw>
  </div>


</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPictureInfo } from "@/apis/index";

import Excalidraw from '../components/Excalidraw.vue';


onMounted(async () => {
  const res = await getPictureInfo();
  console.log(res);
});

</script>



<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
