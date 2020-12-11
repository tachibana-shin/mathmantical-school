<template>
  <v-card outlined class="border-0 p-relative h-100">
    <v-app-bar app flat fixed color="blue" dark>
      <v-app-bar-nav-icon @click="$emit('input', true)"></v-app-bar-nav-icon>
      <v-toolbar-title> Thử thách toán </v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto border-0" outlined>
            <v-card-text>
              <h2 class="font-chocolate text-h2 text-center"> math challenges </h2>
              <div class="text--primary mt-5"> Hãy chọn bài tập và thời gian bạn sẽ hoàn thành nó
              </div>
              <v-autocomplete v-model="lesson" :items="items" :loading="isLoading" :search-input.sync="search" color="white" hide-no-data hide-selected label="Bài học" placeholder="Tìm bài học thử thách" prepend-icon="mdi-database-search" return-object />
              <v-time-picker :allowed-hours="allowedHours" :allowed-minutes="allowedMinutes" class="mt-4" format="24hr" scrollable min="9:30" max="22:15" fixed></v-time-picker>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [],
      isLoading: false,
      lesson: null,
      search: ""
    }),
    watch: {
      async search(newVal) {
        this.isLoading = true
        this.items = (await fetch(`${this.$config.baseURL}/api/search-subject?query=${newVal}`).then(e => e.json())).data

      }
    }
  }
</script>
<style lang="scss" scoped>
  .vertical-baseline {
    vertical-align: baseline;
  }

  .text-truncate {
    white-space: nowrap;
    word-break: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>