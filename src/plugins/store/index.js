import Vue from "vue"
import Vuex from "vuex"
import { lesson } from "./modules/lesson"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { lesson }
});