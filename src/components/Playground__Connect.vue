<template>
  <v-card class="mx-auto border-0 playground__play" outlined>
    <div class="$1 pt-2">
      <draggable-transition v-model="items" class="h-100">
        <div class="d-inline-block mr-1" v-for="item in items" :key="item.id">
          <v-btn fab :color="item.color" :key="item.id" :icon="!!item.icon">
            <v-icon v-if="!!item.icon"> {{ item.icon }} </v-icon>
            <v-img v-else-if="!!item.image" :src="item.image" />
            <template v-else>
              {{ item.text }}
            </template>
          </v-btn>
        </div>
      </draggable-transition>
      <slot name="fab" />
    </div>
    <div class="$2 bg-grey rounded px-3 py-2 text-center d-flex flex-column">
      <div class="text-center mb-2">
        <show-question :text="data.question" />
        <small class="grey--text text--darken-3"> Kéo vào đây </small>
      </div>
      <draggable-transition v-model="items2" group="people" class="h-100" class-trans-group="h-100">
        <div class="d-inline-block mr-1" v-for="item in items2" :key="item.id">
          <v-btn fab :color="item.color" :key="item.id" :icon="!!item.icon">
            <v-icon v-if="!!item.icon"> {{ item.icon }} </v-icon>
            <v-img v-else-if="!!item.image" :src="item.image" />
            <template v-else>
              {{ item.text }}
            </template>
          </v-btn>
        </div>
      </draggable-transition>
    </div>
  </v-card>
</template>
<script>
  import draggableTransition from "./draggable-transition"
  import ShowQuestion from "./ShowQuestion"
  export default {
    components: { draggableTransition, ShowQuestion },
    props: {
      data: Object
    },
    data() {
      return {
        items: this.data.items,
        items2: []
      }
    },
    watch: {
      items2(newVal) {
        this.$emit("input", newVal)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .playground__play {
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
      height: (208 / 468 * 100%);
      width: 100%;
      background-color: #E0E0E0;
      position: relative;
    }
  }
</style>