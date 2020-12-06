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
        let text = this.text.replace("%text", "<span class=\"blue--text\">" + this.resume || this.placeholder || "__" + "</span>")

        ;
        (this.resume || "").replace(/\s/, "").split(",").forEach((item, index) => {
          text = text.replace(`%text${index + 1}`, "<span class=\"blue--text\">" + item + "</span>")
        })
        return text
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