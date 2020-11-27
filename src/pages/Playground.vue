<template>
   <v-card height="100%">
      <v-app-bar app flat fixed color="blue" dark>
         <v-btn icon @click="$router.back()">
            <v-icon>mdi-arrow-left</v-icon>
         </v-btn>
         <v-toolbar-title> Số liền trước, liền sau </v-toolbar-title>
      </v-app-bar>
      <v-container fluid class="fill-height">
         <v-row class="fill-height">
            <v-col class="fill-height">
               <playground__dragdrop-group class="fill-height" />
            </v-col>
         </v-row>
      </v-container>
   </v-card>
</template>
<script>
   import KeyboardNumber from "@/components/KeyboardNumber"
   import Playground__dragdropGroup from "@/components/Playground__DragDrop-Group"

   export default {
      components: { KeyboardNumber, Playground__dragdropGroup }
   }
</script>