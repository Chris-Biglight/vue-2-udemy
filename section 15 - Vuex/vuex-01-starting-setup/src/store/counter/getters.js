export default {
  testAuth(state, getters, rootState, rootGetters) {
    console.log(getters, rootGetters, rootState);
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 4;
  },

  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  }
};
