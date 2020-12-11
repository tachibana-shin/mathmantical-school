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
              <p class="grey--text text--darken-1 mt-8 mb-3"> Hãy chọn bài tập và thời gian bạn sẽ hoàn thành nó
              </p>
              <v-autocomplete v-model="lesson" :items="items" :loading="isLoading" :search-input.sync="search" label="Bài học" placeholder="Tìm bài học thử thách" prepend-icon="mdi-database-search" return-object auto-select-first item-text="name" required clearable />
              <p class="grey--text text--darken-1 mb-3 mt-4"> Thời gian làm một bài toán </p>
              <v-slider v-model="timeAnswer" step="1" thumb-label ticks="always" prepend-icon="mdi-alarm" label="s" inverse-label min="1" max="120" persistent-hint :hint="`${timeAnswer} giây`" />
              <div class="mt-3 mx-auto text-center">
                <v-btn color="blue" class="mt-5 mx-auto" :dark="!!lesson" :to="pathRouter" :disabled="!lesson" @click="$store.commit('addTaskToPlaygroundChallenges', ID)">
                  <v-icon> mdi-play </v-icon>
                  Bắt đầu chơi
                </v-btn>
              </div>
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
      search: "",
      timeAnswer: 0
    }),
    watch: {
      search(newVal) {
        this.isLoading = true
        clearTimeout(this.timeoutSearch)
        this.timeoutSearch = setTimeout(async () => {
          this.items = (await fetch(`${this.$config.baseURL}/api/search-subject?query=${newVal === null ? "" : newVal}`).then(e => e.json())).data
          this.isLoading = false
        }, 500)
      }
    },
    computed: {
      pathRouter() {
        return !this.lesson ? "./" : `/lesson/class/${this.lesson.classes}/week/${this.lesson.week}/level/${this.lesson.level}/playground-challenges-${this.timeAnswer}`
      },
      ID() {
        return `C${this.lesson.classes}W${this.lesson.week}L${this.lesson.level}`
      }
    },
    beforeCreate() {
      this.$store.commit("cleanTaskInPlaygroundChallenges")
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