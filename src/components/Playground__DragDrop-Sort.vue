<template>
  <v-card class="mx-auto border-0 playground__play" outlined>
    <div class="$1">
      <show-question :text="data.question" />
      <div class="mx-auto px-8">
        <draggable-transition v-model="items">
          <div class="w-100 mb-2 py-2 blue rounded text-center grey--text text--lighten-5" v-for="item in items" :key="item.id">
            {{ item.text }}
          </div>
        </draggable-transition>
      </div>
      <slot name="fab" />
    </div>
  </v-card>
</template>
<script>
  import draggableTransition from "./draggable-transition"
  import ShowQuestion from "./ShowQuestion"
  export default {
    components: {
      draggableTransition,
      ShowQuestion
    },
    props: {
      data: Object
    },
    data() {
      return {
        items: this.data.items
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
  .playground__play {
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