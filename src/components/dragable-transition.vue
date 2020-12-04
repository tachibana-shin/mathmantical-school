<template>
  <draggable v-model="items" v-bind="dragOptions" @start="drag = true" @end="drag = false">
    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
      <slot name="default" />
    </transition-group>
  </draggable>
</template>
<script>
  import draggable from "vuedraggable";

  export default {
    props: {
      value: Array
    },
    components: {
      draggable
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "people",
          disabled: false,
          ghostClass: "ghost"
        }
      },
      items: {
        get() {
          return this.value
        },
        set(e) {
          this.$emit("input", e)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dragdrop-transition {
    &>>>.flip-list-move {
      transition: transform 0.5s;
    }

    &>>>.no-move {
      transition: transform 0s;
    }

    .ghost {
      opacity: 0.5;
    }
  }
</style>