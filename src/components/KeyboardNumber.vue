<template>
   <v-container fluid>
      <v-row>
         <v-col cols="12">
            <p class="text-center display-1">
               {{ input }}
            </p>
         </v-col>
      </v-row>
      <v-row v-for="i in 3" :key="i">
         <v-col v-for="j in 3" :key="j">
            <v-btn icon block class="display-1" color="black" @click="input += `${i * j}`"> {{ i * j }} </v-btn>
         </v-col>
      </v-row>
      <v-row>
         <v-col>
            <v-btn icon block class="display-1" color="black" @click="input += `.`"> . </v-btn>
         </v-col>
         <v-col>
            <v-btn icon block class="display-1" color="black" @click="input += `0`"> 0 </v-btn>
         </v-col>
         <v-col>
            <v-btn block icon class="display-1" color="black" @click="input = input.slice(0, input.length - 1)">
               <v-icon> mdi-keyboard-backspace </v-icon>
            </v-btn>
         </v-col>
      </v-row>
   </v-container>
</template>
<script>
   export default {
      props: {
         value: String
      },
      data() {
         return {
            input: this.value
         }
      },
      watch: {
         input(newVal) {
            this.$emit("input", newVal)
         }
      }
   }
</script>