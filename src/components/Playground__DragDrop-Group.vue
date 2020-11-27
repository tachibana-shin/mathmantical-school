<template>
   <v-card class="mx-auto border-0 playground__dragdrop-group" outlined>
      <div class="$1">
      </div>
      <div class="$2 bg-grey">
         <div>
            <p class="grey text--darken-4"> Tìm số liền sau: 9 </p>
            <small class="grey text--darken-3"> Kéo vào đây </small>
         </div>
         <draggable v-model="items" :options="{ group: 'people' }">
            <transition-group name="move-transition">
               <div v-for="item in items" :key="items.id">
                  {{ items.title }}
               </div>
            </transition-group>
         </draggable>
      </div>
   </v-card>
</template>
<script>
   import draggable from "vuedraggable"
   export default {
      components: { draggable },
      data: () => ({
         items: [
            {
               id: 1,
               avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg",
               title: "Brunch this life?",
               subtitle: "Subtitle 1"
        },
            {
               id: 2,
               avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg",
               title: "Winter Lunch",
               subtitle: "Subtitle 2"
        },
            {
               id: 3,
               avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg",
               title: "Oui oui",
               subtitle: "Subtitle 3"
        }
      ],
         items2: [
            {
               id: 4,
               avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/4.jpg",
               title: "Brunch this weekend?",
               subtitle: "Subtitle 4"
        },
            {
               id: 5,
               avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/5.jpg",
               title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
               subtitle: "Subtitle 5"
        }
      ]
      })
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
      & >>> .move-transition-item  {
  transition: all 1s;
}
& >>> .move-transition-active {
  position: absolute;
}
   }
</style>