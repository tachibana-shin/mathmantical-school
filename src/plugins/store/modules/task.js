export default {
  state: {
    playground: [],
    playgroundChallenges: []
  },
  mutations: {
    addTaskToPlayground({ playground }, id) {
      if (playground.indexOf(id) == -1) {
        playground.push(id)
      }
    },
    removeTaskInPlayground(state, id) {
      state.playground = state.playground.filter(e => e != id)
    },
    cleanTaskInPlayground: (state) => state.playground = [],
    addTaskToPlaygroundChallenges({ playgroundChallenges }, id) {
      if (playgroundChallenges.indexOf(id) == -1) {
        playgroundChallenges.push(id)
      }
    },
    removeTaskInPlaygroundChallenges(state, id) {
      state.playgroundChallenges = state.playgroundChallenges.filter(e => e != id)
    },
    cleanTaskInPlaygroundChallenges: (state) => state.playgroundChallenges = []
  }
}