<template>
   <v-card class="mx-auto border-0 playground__dragdrop-group h-100" outlined>
      <div class="$1"><!--
         <p class="grey--text text--darken-4"> {{ question }} </p>-->
         {{
            `
               p.grey--text.text--lighten-4 ${ question }
            ` | pug
         }}
         <slot name="fab" />
      </div>
      <div class="$2 bg-grey rounded px-3 py-2 text-center d-flex flex-column">
         <div class="d-flex h-50">
            <div class="w-50 mx-1 py-3 my-2 text-center h5 blue grey--text text--lighten-4 rounded">
               A. 50
            </div>
            <div class="w-50 mx-1 py-3 my-2 text-center h5 blue grey--text text--lighten-4 rounded">
               B. 70
            </div>
         </div>
         <div class="d-flex h-50">
            <div class="w-50 mx-1 py-3 my-2 text-center h5 blue grey--text text--lighten-4 rounded">
               C. 90
            </div>
            <div class="w-50 mx-1 py-3 my-2 text-center h5 blue grey--text text--lighten-4 rounded">
               D. 100
            </div>
         </div>
      </div>
   </v-card>
</template>
<script>
   import draggable from "vuedraggable"
   export default {
      components: { draggable },
      props: {
         itemsProp: Array,
         question: String
      },
      data() {
         return {
            items: this.itemsProp,
            items2: []
         }
      },
      watch: {
         items2(newVal) {
            this.$emit("value", newVal)
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
         position: relative;
      }

      .\$2 {
         width: 100%;
      }
   }

   .h-50 {
      height: 50%;
   }

   .w-50 {
      width: 50%;
   }
</style>