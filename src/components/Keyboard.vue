<template>
  <div class="keyboard d-flex flex-wrap p-relative">
    <div class="d-flex justify-content-center p-relative w-100" v-for="i in 3">
      <div v-for="j in 3" class="w-100">
        <v-btn color="black" block icon class="display-1" small @click="input += (i - 1) * 3 + j"> {{ (i - 1) * 3 + j }} </v-btn>
      </div>
    </div>
    <div class="d-flex justify-content-center p-relative w-100">
      <div class="w-100">
        <v-btn color="black" icon block class="display-1" small @click="input += '.'"> . </v-btn>
      </div>
      <div class="w-100">
        <v-btn color="black" icon block class="display-1" small @click="input += 0"> 0 </v-btn>
      </div>
      <div class="w-100">
        <v-btn color="black" icon block class="display-1" small @click="input = input.slice(0, -1)">
          <v-icon> mdi-keyboard-backspace </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: String
    },
    data() {
      return {
        input: this.value || ""
      }
    },
    watch: {
      input(newVal) {
        this.$emit("input", newVal)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .keyboard {
    height: 100%;
    width: 100%;
  }
</style>