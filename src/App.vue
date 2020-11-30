<template>
   <v-app id="app">
      <v-navigation-drawer v-model="drawer" absolute temporary>
         <v-list-item>
            <v-list-item-avatar>
               <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-list-item-avatar>
         </v-list-item>
         <v-list-item>
            <v-list-item-content>
               <v-list-item-title>
                  Em học toán
               </v-list-item-title>
               <v-list-item-subtitle>
                  Học toán thú vị
               </v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>
         <v-divider></v-divider>
         <v-list dense>
            <v-list-item v-for="(item, index) in drawerItems" :key="index">
               <v-list-item-icon>
                  <v-icon> {{ item.icon }} </v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                  <v-list-item-title> {{ item.text }} </v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
      </v-navigation-drawer>
      <v-main>
         <router-view v-model="drawer" />
      </v-main>
   </v-app>
</template>
<style lang="scss">
   .border-0 {
      border: 0 !important;
   }
   .p-relative {
      position: relative;
   }
</style>
<style lang="scss" scoped>
   #app {
      & >>> .v-application--wrap {
         min-height: calc(100vh - 56px);
      }
   }
</style>
<script>
   export default {
      data: () => ({
         drawer: false,
         drawerItems: [
            { icon: "mdi-book-multiple", text: "Khóa học Toán" },
            { icon: "mdi-apps", text: "Thử thách toán" },
            { icon: "mdi-view-agenda", text: "Song đấu toán" },
            { icon: "mdi-gamepad", text: "Trò chơi toán" }
         ]
      })
   }
</script>