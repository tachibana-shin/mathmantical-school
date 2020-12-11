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
    },
    getInfoLessonInChallenges: ({ scoreChallenges }) => id => {
      return scoreChallenges.find(item => item.id == id)
    }
  },
  mutations: {
    newScoreInLesson(state, { point, id, countQuestion, questionTrue }) {
      state.score = state.score.filter(item => item.id != id)
      state.score.unshift({ point, id, countQuestion, questionTrue })
    },
    newScoreInLessonChallenges(state, { point, id, countQuestion, questionTrue, sumTime }) {
      state.scoreChallenges = state.score.filter(item => item.id != id)
      state.scoreChallenges.unshift({ point, id, countQuestion, questionTrue, sumTime })
    },
    pushLessonToLibrary(state, id) {
      state.library = state.library.filter(item => item != id)
      state.library.unshift(id)
    }
  }
};