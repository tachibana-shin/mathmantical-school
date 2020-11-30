<template>
   <v-card outlined class="border-0 h-100 p-relative">
      <v-app-bar app flat fixed color="blue" dark>
         <v-btn icon @click="$router.back()">
            <v-icon>mdi-arrow-left</v-icon>
         </v-btn>
         <v-toolbar-title> Số liền trước, liền sau </v-toolbar-title>
      </v-app-bar>
      <div class="d-flex flex-column h-100">
         <div>
            <div class="tool">
               <div class="w-100" />
               <div class="process blue py-1">
                  2/4
               </div>
               <v-btn icon class="blue--text mr-1">
                  <v-icon> mdi-lightbulb-outline</v-icon>
               </v-btn>
            </div>
         </div>
         <v-container fluid class="h-100">
            <v-row class="h-100">
               <v-col class="h-100">
                  <!--<playground__input v-model="answer" :resume="answer" class="h-100" />-->
                  <!--<playground__dragdrop-group class="h-100" :items-prop="items" v-model="answer" :question="question" />-->
                  <!--<playground__dragdrop-sort v-model="answer" :items-prop="items" :question="question"/>-->
                  <playground__select :data="questions[0]">
                     <v-btn class="mx-2 fixed-center" fab dark color="blue" absolute bottom to="/playground" @click="snackbar = true" slot="fab">
                        <v-icon dark>
                           mdi-arrow-right
                        </v-icon>
                     </v-btn>
                  </playground__select>
               </v-col>
            </v-row>
         </v-container>
      </div>
      <v-snackbar v-model="snackbar" multi-line class="snackbar" absolute>
         Bạn làm sai rồi
         <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs">
               Xin hãy làm lại
            </v-btn>
         </template>
      </v-snackbar>
   </v-card>
</template>
<script>
   import Playground__dragdropGroup from "@/components/Playground__DragDrop-Group"
   import Playground__dragdropSort from "@/components/Playground__DragDrop-Sort"
   import Playground__input from "@/components/Playground__Input"
   import Playground__select from "@/components/Playground__Select"

   export default {
      components: {
         Playground__dragdropGroup,
         Playground__dragdropSort,
         Playground__input,
         Playground__select
      },
      data: () => ({
         snackbar: false,

         questions: [
            {
               type: "select",
               question: `
p.grey--text.text--darken-4 Tính 50 : 5 =
   div.display-1.text-center 50 : 5 =
      span.blue--text %text`,
               items: [10, 5, 50, 20]
            }

         ]
      })
   }
</script>
<style lang="scss" scoped>
   .tool {
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .process {
         border-radius: 0 0 30px 30px;
         color: #fff;
         width: (405px / 1080 * 360);
         position: absolute;
         text-align: center;
         left: 50%;
         transform: translatex(-50%);
      }
   }

   .fixed-center {
      left: 50%;
      transform: translatex(-50%);
   }

   .snackbar {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 9999;
   }

   .h-100 {
      height: 100%;
   }
</style>