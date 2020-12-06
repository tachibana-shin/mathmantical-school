<template>
  <div class="d-flex h-100 p-relative justify-space-between align-center">
    <div class="text-center mx-auto">
      <v-progress-circular :size="50" color="blue" indeterminate />
      <p> {{ title }} </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: String
    }
  }
</script>