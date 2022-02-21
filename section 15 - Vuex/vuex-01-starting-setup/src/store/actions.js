export default {
  login(context) {
    console.log('login');
    context.commit('login');
  },
  logout(context) {
    console.log('logout');
    context.commit('logout');
  }
};
