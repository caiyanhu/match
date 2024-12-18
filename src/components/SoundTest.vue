<template>
  <div>
    <a-button type="primary" @click="play">Play sound</a-button>
    <a-button type="primary" @click="stop">Stop sound</a-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSound } from '@vueuse/sound'
import countDown from '/audio/倒计时-soundeffect.mp3'


const countDownSound = useSound(countDown);

const play = () => {
  countDownSound.play();
}
const stop = () => {
  countDownSound.stop();
}
</script>
