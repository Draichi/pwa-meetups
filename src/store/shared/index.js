export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  // is in the 'actions' where we made ascyncronus tasks
  actions: {
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
}
