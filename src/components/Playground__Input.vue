<template>
  <v-card class="mx-auto border-0 playground__play" outlined>
    <div class="$1">
      <show-question :text="data.question" :resume="input" :placeholder="data.placehoder" />
      <slot name="fab" />
    </div>
    <div class="$2">
      <app-keyboard v-model="input" />
    </div>
  </v-card>
</template>
<script>
  import appKeyboard from "./Keyboard"
  import ShowQuestion from "./ShowQuestion"
  export default {
    components: {
      appKeyboard,
      ShowQuestion
    },
    props: {
      data: Object
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

    .\$2 {
      width: 100%;
      height: (208 / 468 * 100%);
      position: relative;
    }
  }
</style>