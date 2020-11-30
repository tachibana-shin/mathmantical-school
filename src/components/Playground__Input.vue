<template>
   <v-card class="mx-auto border-0 playground__dragdrop-group" outlined>
      <div class="$1">
         <p class="grey--text text--darken-4"> Tính 50:5 = </p>
         <div class="display-1 text-center"> 50 : 5 = <span class="blue--text">{{ resume }}</span> </div>
      </div>
      <div class="$2">
         <app-keyboard v-model="input" />
      </div>
   </v-card>
</template>
<script>
   import draggable from "vuedraggable"
   import appKeyboard from "./Keyboard"
   export default {
      components: { draggable, appKeyboard },
      props: {
         resume: String
      },
      data: () => ({
         input: ""
      }),
      watch: {
         input(newVal) {
            this.$emit("input", newVal)
         }
      }
   }
</script>
<style lang="scss" scoped>
   .playground__dragdrop-group {
      display: flex;
      flex-direction: column;
      position: relative;

      .\$1 {
         flex-basis: 0;
         flex-grow: 1;
         max-height: 100%;
         height: 100%;
      }

      .\$2 {
         width: 100%;
      }
   }
</style>