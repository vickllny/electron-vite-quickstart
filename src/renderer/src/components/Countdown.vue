<template>
  <div class="countdown">
    <h1>Token Received: {{ tokenValue }}</h1>
    <p>Closing in {{ countdown }} seconds...</p>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  data() {
    return {
      countdown: 5,
      tokenValue: ''
    }
  },
  created() {
    this.startCountdown()
    window.electron.ipcRenderer.on('token-found', (_event, _cookie) => {
      console.log(JSON.stringify(_cookie))
      this.tokenValue = _cookie?.value
    })
  },
  methods: {
    startCountdown() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const inverval = setInterval(() => {
        this.countdown--
        if (this.countdown === 0) {
          clearInterval(internal)
          window.electron.ipcRenderer.send('close-child-window')
        }
      }, 100)
    }
  }
}
</script>

<style scoped>
.countdown {
  text-align: center;
  margin-top: 50px;
}
</style>
