<template>
  <v-card outlined class="border-0 p-relative h-100">
    <v-app-bar app flat fixed color="blue" dark>
      <v-app-bar-nav-icon @click="$emit('input', true)"></v-app-bar-nav-icon>
      <v-toolbar-title> Kết quả học tập </v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-list v-if="history.length">
            <template v-for="item in history">
              <v-subheader> {{ item.date }} </v-subheader>
              <v-list-item v-for="(item, index) in item.items" :key="index">
                <v-list-item-avatar>
                  <v-icon class="grey lighten-1" dark> {{ item.icon }} </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title> {{ item.name }} </v-list-item-title>
                  <v-list-item-subtitle> {{ item.score ? `${item.score.point} điểm (${item.score.questionTrue} ans / ${item.score.countQuestion} ques)` : "Chưa hoàn thành" }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <p class="grey--text text--darken-2 text-center " v-else> Bạn chưa làm bài tập nào. </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    computed: {
      history() {
        const history = [...this.$store.state.history.items].sort((a, b) => b.times - a.times)
        const score = this.$store.state.lesson.score

        const result = {}

        history.forEach(({ id, name, times }) => {
          const data = new Date(times).toLocaleDateString()
          const thisScore = score.find(item => item.id == id)

          if (data in result) {
            result[data].push({ id, name, score: thisScore })
          } else {
            result[data] = [{ id, name, score: thisScore }]
          }
        })

        const array = []

        for (const date in result) {
          array.push({ date, items: result[date] })
        }
        return array.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      }
    }
  }
</script>