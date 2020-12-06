<template>
  <div v-html="html" class="show-question"></div>
</template>
<script>
  export default {
    props: {
      text: String,
      resume: [String, Number, Array, Object],
      placeholder: String
    },
    computed: {
      html() {
        return this.text.replace('%text', this.resume || this.placeholder || "__")
      }
    }
  }
</script>
<style lang="scss" scoped>
  .show-question {
    width: 100%;

    &>>>.d-flex {
      position: relative;
      width: 100%;
      flex-wrap: wrap;
    }

    &>>>img {
      max-width: 100%;
      height: auto;
    }
  }
</style>