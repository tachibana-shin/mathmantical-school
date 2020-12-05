export default {
  state: {
    score: []
  },
  mutations: {
    newScoreInLesson(state, { point, id }) {
      state.score = state.score.filter(item => item.id != id)
      state.score.unshift({ point, id })
    }
  }
};