import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NoFound from '@/views/NoFound.vue'
import Recherche from '@/views/Recherche.vue'
import Teams from '@/views/Teams.vue'
import Tournaments from '@/views/Tournaments.vue'
import Soon from '@/views/Soon.vue'

const routes = [
  {
    path: "/",
    name: 'Home',
    alias: "/home",
    component: Home
  },
  {
    path: "/rechercher",
    name: "Recherche",
    component: Recherche
  },
  {
    path: "/tournaments",
    name: "Tournaments",
    component: Tournaments
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  },
  {
    path: "/tournament/:catchAll(.*)",
    name: "tournament",
    component: Soon
  },
  {
    path: "/news",
    name: "News",
    redirect: "/soon"
  },
  {
    path: "/soon",
    name: "Soon",
    component: Soon
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
