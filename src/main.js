
import Vue from "vue"
import App from "./App"
import Loading from "./components/VLoading"
import router from "@/plugins/router"
import store from "@/plugins/store"
import vuetify from "@/plugins/vuetify"

try {
 if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
} catch(e) { console.log("App Error") }

Vue.component("v-loading", Loading)

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  components: { App },
  template: "<App/>"
})
