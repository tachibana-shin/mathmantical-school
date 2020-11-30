<template>
   <v-card class="mx-auto border-0 playground__dragdrop-group" outlined>
      <div class="$1 pt-2">
         <draggable v-model="items" :options="{ group: 'people' }">
            <div class="d-inline mr-1" v-for="item in items">
               <v-btn fab :color="item.color" :key="item.id" :icon="!!item.icon">
                  <v-icon v-if="!!item.icon"> {{ item.icon }} </v-icon>
                  <v-img v-else-if="!!item.image" :src="item.image" />
                  <template v-else>
                     {{ item.text }}
                  </template>
               </v-btn>
            </div>
         </draggable>
         <slot name="fab"/>
      </div>
      <div class="$2 bg-grey rounded px-3 py-2 text-center">
         <div class="text-center mb-2">
            <div class="grey-text text--darken-4"> {{ question }} </div>
            <small class="grey--text text--darken-3"> Kéo vào đây </small>
         </div>
         <draggable v-model="items2" :options="{ group: 'people' }">
            <div class="d-inline mr-1" v-for="item in items2">
               <v-btn fab :color="item.color" :key="item.id" :icon="!!item.icon">
                  <v-icon v-if="!!item.icon"> {{ item.icon }} </v-icon>
                  <v-img v-else-if="!!item.image" :src="item.image" />
                  <template v-else>
                     {{ item.text }}
                  </template>
               </v-btn>
            </div>
         </draggable>
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
      }

      .\$2 {
         height: (208rem / 16);
         width: 100%;
         background-color: #E0E0E0;
      }

      &>>>.move-transition-item {
         transition: all 1s;
      }

      &>>>.move-transition-active {
         position: absolute;
      }
   }
</style>