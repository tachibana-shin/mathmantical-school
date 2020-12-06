<template>
  <v-card class="mx-auto border-0 playground__play h-100" outlined>
    <div class="$1">
      <show-question :text="question" :resume="itemsProp[ answer ]" :placeholder="data.placeholder" />
      <slot name="fab" />
    </div>
    <div class="$2 bg-grey rounded px-3 py-2 text-center d-flex flex-column">
      <div class="d-flex p-relative h-50" v-for="(item, index1) in items">
        <div class="mx-1 w-50" v-for="(item, index2) in item">
          <v-btn class="w-100 mx-1 py-3 my-2 text-center h5" dark @click="answer = index1 * 2 + index2" :color="answer == index1 * 2 + index2 ? 'cyan' : 'blue'">
            {{ item }}
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
  import ShowQuestion from "./ShowQuestion"
  export default {
    components: { ShowQuestion },
    props: {
      data: Object
    },
    data() {
      return {
        answer: -1
      }
    },
    computed: {
      itemsProp() {
        return this.data.items
      },
      question() {
        return this.data.question
      },
      items() {
        const groups = []
        for (let index = 0, length = this.itemsProp.length; index < length; index += 2) {
          groups.push(this.itemsProp.slice(index, index + 2))
        }
        return groups
      }
    },
    watch: {
      answer(newVal) {
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
      width: 100%;
      position: relative;
      box-sizing: border-box;
    }
  }
</style>