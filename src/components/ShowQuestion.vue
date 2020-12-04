<template>
  <div v-html="html"></div>
</template>
<script>
  import pug from "pug"
  export default {
    props: {
      text: String,
      resume: [String, Number, Array, Object],
      placeholder: String
    },
    computed: {
      html() {
        return pug.render(this.text).replace('%text', this.resume || this.placeholder || "__")
      }
    }
  }
</script>