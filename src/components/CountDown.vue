<template>
  <div
    class="wrapper_countdown bg-countdown_bg bg-no-repeat flex justify-around items-center">
    <div
      class="wrapper_clock bg-countdown_clock bg-no-repeat"
      :class="{
        'animate-wiggle': clockWiggle,
        'animate-infinite': clockWiggle,
        'animate-duration-100': clockWiggle,
      }"
      @click="onTest"></div>
    <vue-countdown
      ref="countdown"
      :auto-start="false"
      :time="time"
      v-slot="{ minutes, seconds, totalSeconds }"
      @progress="onCountdownProgress"
      @end="onCountdownEnd">
      <span
        class="text-[48px]"
        :class="totalSeconds <= 50 ? 'text-red-500' : 'text-white'">
        {{ minutes >= 10 ? minutes : "0" + minutes }}:{{
          seconds >= 10 ? seconds : "0" + seconds
        }}
      </span>
    </vue-countdown>
  </div>
</template>

<script setup>
import { useSound } from "@vueuse/sound";
import { ref } from "vue";

import soundeffect from "/audio/倒计时-soundeffect.mp3";

const emit = defineEmits(["timeEnd"]);

const sound = useSound(soundeffect);

const time = ref(1 * 60 * 1000);
const countdown = ref();
const clockWiggle = ref(false);

const onTest = () => {
  if (countdown.value.counting) {
    countdown.value.abort();
  } else {
    countdown.value.start();
  }
};

const onCountdownProgress = (data) => {
  if (data.totalSeconds <= 50) {
    clockWiggle.value = true;
    sound.play();
  }
};

const onCountdownEnd = () => {
  clockWiggle.value = false;
  sound.stop();
  emit("timeEnd");
};
</script>

<style lang="scss" scoped>
.wrapper_countdown {
  width: 254px;
  height: 84px;
  background-size: 100% 100%;

  .wrapper_clock {
    width: 56px;
    height: 56px;
    background-size: 100% 100%;
  }
}
</style>
