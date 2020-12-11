import eruda from "eruda"
import Vue from "vue"
import App from "./App"
import Loading from "./components/VLoading"
import router from "@/plugins/router"
import store from "@/plugins/store"
import vuetify from "@/plugins/vuetify"

if (process.env.NODE_ENV === 'production') {
  try {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  } catch (e) { console.log("App Error") }
} else {
  eruda.init()
}

Vue.prototype.$config = {
  baseURL: process.env.NODE_ENV == "production" ? "" : "http://localhost:3000"
}
Vue.prototype.$dialog = null

Vue.util.defineReactive(Vue.prototype, "$dialog")

Vue.component("v-loading", Loading)

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  components: { App },
  template: "<App/>"
})