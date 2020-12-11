export default {
  state: {
    score: [],
    library: [],
    scoreChallenges: []
  },
  getters: {
    getInfoLessonInLibrary: ({ score }) => id => {
      return score.find(item => item.id == id)
    },
    itInLibrary: ({ library }) => id => {
      return library.indexOf(id) > -1
    }
  },
  mutations: {
    newScoreInLesson(state, { point, id, countQuestion, questionTrue }) {
      state.score = state.score.filter(item => item.id != id)
      state.score.unshift({ point, id, countQuestion, questionTrue })
    },
    newScoreInLessonChallenges(state, { point, id, countQuestion, questionTrue }) {
      state.scoreChallenges = state.score.filter(item => item.id != id)
      state.scoreChallenges.unshift({ point, id, countQuestion, questionTrue })
    },
    pushLessonToLibrary(state, id) {
      state.library = state.library.filter(item => item != id)
      state.library.unshift(id)
    }
  }
};