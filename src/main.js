import eruda from "eruda"
eruda.init()
import Vue from "vue"
import App from "./App"
import router from "@/plugins/router"
import store from "@/plugins/store"
import vuetify from "@/plugins/vuetify"
import pug from "pug"

Vue.filter("pug", e => pug.render(e))

new Vue({
   el: "#app",
   router,
   store,
   vuetify,
   components: { App },
   template: "<App/>"
})