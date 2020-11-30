<template>
   <div v-html="html"></div>
</template>
<script>
   import pug from "pug"
   export default {
      props: {
         text: String,
         resume: [Number, String, Array, Object]
      },
      computed: {
         html() {
            return !!(this.resume + "") ? pug.render(this.text).replace('%text', this.resume) : pug.render(this.text)
         }
      }
   }
</script>