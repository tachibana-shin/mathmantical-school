import eruda from "eruda"
eruda.init()
import Vue from "vue"
import App from "./App"
import Loading from "./components/VLoading"
import router from "@/plugins/router"
import store from "@/plugins/store"
import vuetify from "@/plugins/vuetify"

Vue.component("v-loading", Loading)

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  components: { App },
  template: "<App/>"
})