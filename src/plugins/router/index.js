import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routes = [
   {
      path: "/",
      component: () => import("@/pages/Home")
   },
   {
      path: "/lesson",
      component: () => import("@/pages/Lesson")
   },
   {
      path: "/playground",
      component: () => import("@/pages/Playground")
   }
]

export default new Router({
   mode: "history",
   routes,
   scrollBehavior(from, to, saved) {
      return saved || { x: 0, y: 0 }
   }
})