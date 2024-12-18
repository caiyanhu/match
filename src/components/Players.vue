<script setup>
import { ref, onMounted } from "vue";
import io from "socket.io-client";
import { onUnmounted } from "vue";

// 存储自己的游戏进度
const myProgress = ref(0);
// 存储其他玩家的游戏进度信息（以玩家ID为键，进度为值的对象形式）
const otherPlayersProgress = ref({});

const socket = ref(null);

// 连接成功时的回调
onMounted(() => {
  socket.value = io("http://36.134.135.155:3000");
  socket.value.on("connect", () => {
    console.log("已连接到服务器");
  });

  socket.value.on("playerProgressUpdate", (data) => {
    const { playerId, progress } = data;
    if (playerId !== socket.id) {
      // 更新其他玩家的进度信息
      otherPlayersProgress.value[playerId] = progress;
    }
  });
});

onUnmounted(() => {
  if (socket.value) {
    socket.value.off("connect");
    socket.value.off("playerProgressUpdate");
    socket.value.close();
  }
});

// 模拟更新自己的游戏进度（这里简单定时更新，实际根据游戏逻辑触发）
setInterval(() => {
  myProgress.value += Math.floor(Math.random() * 10);
  if (myProgress.value > 100) {
    myProgress.value = 100;
  }
  socket.value.emit("updateProgress", { progress: myProgress.value });
}, 1000);
</script>

<template>
  <div>
    <h2>我的游戏进度: {{ myProgress }}</h2>
    <h2>其他玩家进度:</h2>
    <ul>
      <li
        v-for="(playerProgress, playerId) in otherPlayersProgress"
        :key="playerId">
        玩家 {{ playerId }}: {{ playerProgress }}%
      </li>
    </ul>
  </div>
</template>
