import Vue from "vue"
import Vuex from "vuex"
import createPersistedstate from "vuex-persistedstate"
import lesson from "./modules/lesson"
import task from "./modules/task"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { lesson, task },
  plugins: [
    createPersistedstate({
      paths: ["lesson.score", "lesson.library", "lesson.scoreChallenges"]
    }),
    createPersistedstate({
      storage: sessionStorage,
      paths: ["task.playground", "task.playgroundChallenges"]
    })
  ],
  strict: process.env.NODE_ENV !== 'production'
});