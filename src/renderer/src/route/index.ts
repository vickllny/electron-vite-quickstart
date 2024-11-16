import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Countdown from '../components/Countdown.vue'

const routes: Array<RouteRecordRaw> = [
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
