<template>
  <div class="countdown">
    <h1>Token Received: {{ tokenValue }}</h1>
    <p>Closing in {{ countdown }} seconds...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const countdown = ref<number>(5)
const tokenValue = ref<string>('')

const startCountdown = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const inverval = setInterval(() => {
    countdown.value--
    if (countdown.value === 0) {
      clearInterval(inverval)
      window.electron.ipcRenderer.send('close-child-window')
    }
  }, 1000)
}

onMounted((): void => {
  startCountdown()
  window.electron.ipcRenderer.on('token-found', (_event, _cookie) => {
    console.log(JSON.stringify(_cookie))
    tokenValue.value = _cookie?.value
  })
})
</script>

<style scoped>
.countdown {
  text-align: center;
  margin-top: 50px;
}
</style>
