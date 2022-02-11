import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NoFound from '@/views/NoFound.vue'
import Recherche from '@/views/Recherche.vue'
import Team from '@/views/Team.vue'
import Teams from '@/views/Teams.vue'
import Tournament from '@/views/Tournament.vue'
import Tournaments from '@/views/Tournaments.vue'
import Match from '@/views/Match.vue'
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
    path: "/team/:catchAll(.*)",
    name: "team",
    redirect: "/soon",
    component: Team
  },
  {
    path: "/teams",
    name: "Teams",
    redirect: "/soon",
    component: Teams
  },
  {
    path: "/tournament/:catchAll(.*)",
    name: "tournament",
    component: Tournament
  },
  {
    path: "/match/:catchAll(.*)",
    name: "match",
    component: Match
  },
  {
    path: "/news",
    name: "News",
    redirect: "/soon"
  },
  {
    path: "/users/:catchAll(.*)",
    name: "Users",
    redirect: "/soon"
  },
  {
    path: "/login",
    name: "Login",
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
