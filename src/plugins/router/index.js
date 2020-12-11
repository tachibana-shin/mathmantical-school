import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routes = [
  {
    path: "/",
    component: () => import("@/pages/Home")
   },
  {
    path: "/challenges",
    component: () => import("@/pages/Challenges")
   },/*
   {
     path: "/parallel",
     component: () => import("@/pages/Parallel")
   },*/
   {
     path: "/outcomes",
     component: () => import("@/pages/Outcomes")
   },
  {
    path: "/lesson/class/:classes(\\d+)/week/:week(\\d+)/level/:level(\\d+)",
    component: () => import("@/pages/Lesson"),
  },
  {
    path: "/lesson/class/:classes(\\d+)/week/:week(\\d+)/level/:level(\\d+)/playground",
    component: () => import("@/pages/Playground"),
    meta: {
      isChallenges: false
    }
  },
  {
    path: "/lesson/class/:classes(\\d+)/week/:week(\\d+)/level/:level(\\d+)/playground-challenges-:time(\\d+)",
    component: () => import("@/pages/Playground"),
    meta: {
      isChallenges: true
    }
  }
]

export default new Router({
  mode: "history",
  routes,
  scrollBehavior(from, to, saved) {
    return saved || { x: 0, y: 0 }
  }
});