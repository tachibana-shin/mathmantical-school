export default {
  state: {
    items: []
  },
  mutations: {
    addLessonToHistory(state, payload) {
      state.items = state.items.filter(item => item.id != payload.id)
      state.items.unshift(payload)
    }
  }
}