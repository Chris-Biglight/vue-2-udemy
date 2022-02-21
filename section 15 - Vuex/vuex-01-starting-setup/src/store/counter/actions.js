export default {
  login() {},
  increase(context, payload) {
    console.log(context);
    context.commit('increase', payload);
  },
  increment(context) {
    setTimeout(function() {
      context.commit('increment');
    }, 2000);
  }
};
