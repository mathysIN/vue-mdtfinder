import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NoFound from '@/views/NoFound.vue'

const routes = [
  {
    path: "/",
    name: 'Home',
    alias: "/home",
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: NoFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
