export default {
  state: {
    score: [],
    library: []
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
    newScoreInLesson(state, { point, id, countQuestion }) {
      state.score = state.score.filter(item => item.id != id)
      state.score.unshift({ point, id, countQuestion })
    },
    pushLessonToLibrary(state, id) {
      state.library = state.library.filter(item => item != id)
      state.library.unshift(id)
    }
  }
};

