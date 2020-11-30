<template>
   <v-card>
      <v-app-bar app flat fixed color="blue" dark>
         <v-app-bar-nav-icon @click="$emit('input', true)"></v-app-bar-nav-icon>
         <v-toolbar-title> Khóa học toán </v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
         </v-btn>
         <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
               <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
               </v-btn>
            </template>
            <v-list>
               <v-list-item>
                  <v-radio-group :value="1">
                     <v-radio v-for="i in 5" :key="i" :value="i" :label="`Option ${i}`" />
                  </v-radio-group>
               </v-list-item>
            </v-list>
         </v-menu>
         <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
               <v-tabs-slider color="white"></v-tabs-slider>
               <v-tab v-for="(item, index) in items" :key="index">
                  <v-icon> {{ item.icon }} </v-icon>
                  <p class="mt-3"> {{ item.text }} </p>
               </v-tab>
            </v-tabs>
         </template>
      </v-app-bar>
      <v-tabs-items v-model="tab">
         <v-tab-item v-for="(item, index) in items" :key="index">
            <v-lazy v-model="item.isLoaded" :options="{ threshold: .5 }" min-height="200" transition="fade-transition">
               <v-container fluid>
                  <v-row>
                     <v-col cols="6" v-for="i in 10" :key="i">
                        <v-card :to="`/lesson/${i}`" hover>
                           <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" />
                           <v-card-text> Số liền trước, liền sau ..1, 10... </v-card-text>
                        </v-card>
                     </v-col>
                  </v-row>
               </v-container>
            </v-lazy>
         </v-tab-item>
      </v-tabs-items>
   </v-card>
</template>
<script>
   export default {
      data: () => ({
         tab: null,
         items: [
            { icon: "mdi-select-all", text: "Tất cả", isLoaded: false },
            { icon: "mdi-numeric-1-box", text: "Số học", isLoaded: false },
            { icon: "mdi-plus", text: "Phép cộng", isLoaded: false },
            { icon: "mdi-minus", text: "Phép trừ", isLoaded: false },
            { icon: "mdi-close", text: "Phép nhân", isLoaded: false },
            { icon: "mdi-division", text: "Phép chia", isLoaded: false },
            { icon: "mdi-square-inc-cash", text: "Biểu thức", isLoaded: false }
         ]
      })
   }
</script>