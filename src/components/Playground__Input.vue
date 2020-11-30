<template>
   <v-card class="mx-auto border-0 playground__dragdrop-group" outlined>
      <div class="$1">
         <show-question :text="question" :resume="input" />
         <slot name="fab" />
      </div>
      <div class="$2">
         <app-keyboard v-model="input" />
      </div>
   </v-card>
</template>
<script>
   import appKeyboard from "./Keyboard"
   export default {
      components: { appKeyboard },
      props: {
         question: String
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
   .playground__dragdrop-group {
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
      }
   }
</style>