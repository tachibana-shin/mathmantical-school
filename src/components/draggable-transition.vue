<template>
  <draggable v-model="items" v-bind="dragOptions" @start="start($event); drag = true" @end="drag = false" class="draggable-transition">
    <transition-group type="transition" :name="!drag ? 'flip-list' : null" tag="div" :class="classTransGroup">
      <slot name="default" />
    </transition-group>
  </draggable>
</template>
<script>
  import draggable from "vuedraggable";

  export default {
    props: {
      value: Array,
      group: [String, Object],
      classTransGroup: [String, Array, Object]
    },
    components: {
      draggable
    },
    data: () => ({
      drag: false
    }),
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: this.group || {
            name: "people",
            pull: this.pullFunction
          },
          clone: this.clone,
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
    },
    methods: {
      clone(item) {
        return {
          ...item
        }
      },
      pullFunction() {
        return this.controlOnStart ? "clone" : true;
      },
      start({ originalEvent }) {
        this.controlOnStart = originalEvent.ctrlKey;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .draggable-transition {
    position: relative;

    &>>>.flip-list-move {
      transition: transform 0.5s;
    }

    &>>>.no-move {
      transition: transform 0s;
    }

    &>>>.ghost {
      opacity: 0.5;
    }
  }
</style>