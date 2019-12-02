import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    lingeringObj: null,
  },
  mutations: {
    setLingeringObj: (state, val) => (state.lingeringObj = val)
  },
  actions: {
    createLingeringObj: ({ commit, state }, lo) => {
      commit(
        "setLingeringObj",
        lo
      );
    }
  },
  modules: {
  }
})
