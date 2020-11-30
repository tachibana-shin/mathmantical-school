import eruda from "eruda"
eruda.init()
import Vue from "vue"
import App from "./App"
import router from "@/plugins/router"
import store from "@/plugins/store"
import vuetify from "@/plugins/vuetify"

new Vue({
   el: "#app",
   router,
   store,
   vuetify,
   components: { App },
   template: "<App/>"
})