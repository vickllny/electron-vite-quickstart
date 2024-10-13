<script setup lang="ts">
import Versions from './components/Versions.vue'
import { ref } from 'vue'

const url = ref('')

const ipcHandle = () => window.electron.ipcRenderer.send('ping')

const openWindow = () => {
  window.electron.ipcRenderer.send('open-window', url.value)
}
</script>

<template>
  <img alt="logo" class="logo" src="./assets/electron.svg" />
  <div class="creator">Powered by electron-vite</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
    and
    <span class="ts">TypeScript</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
      <input v-model="url" type="text" />
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
      <a target="" rel="noreferrer" @click="openWindow">Open Window</a>
    </div>
  </div>
  <Versions />
</template>
