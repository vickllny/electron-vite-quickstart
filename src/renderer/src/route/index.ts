import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Countdown from '../components/Countdown.vue'
import App from '../App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: App
  },
  {
    path: '/countdown',
    name: 'Countdown',
    component: Countdown
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
