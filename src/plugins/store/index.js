import Vue from "vue"
import Vuex from "vuex"
import createPersistedstate from "vuex-persistedstate"
import lesson from "./modules/lesson"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { lesson },
  plugins: [createPersistedstate({
    paths: ["lesson.score", "lesson.library"]
  })]
});