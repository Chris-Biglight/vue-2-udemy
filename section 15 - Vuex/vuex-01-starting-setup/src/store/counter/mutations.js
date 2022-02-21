export default {
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
  increment(state) {
    state.counter++;
  }
};
