<template>
   <v-card class="mx-auto border-0 playground__dragdrop-group" outlined>
      <div class="$1">
         <show-question :text="question" />
         <div class="mx-auto px-8">
            <draggable v-model="items" :options="{ group: 'people' }">
               <template v-for="item in items">
                  <div class="w-100 mb-2 py-2 blue rounded text-center grey--text text--lighten-5">
                     {{ item.text }}
                  </div>
               </template>
            </draggable>
         </div>
         <slot name="fab" />
      </div>
   </v-card>
</template>
<script>
   import draggable from "vuedraggable"
   export default {
      components: { draggable },
      props: {
         question: String,
         itemsProp: Array
      },
      data() {
         return {
            items: this.itemsProp
         }
      },
      watch: {
         items(newVal) {
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
   }
</style>