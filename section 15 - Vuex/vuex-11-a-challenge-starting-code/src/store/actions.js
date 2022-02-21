export default {
  login(context) {
    console.log('login');
    context.commit('setAuth', {
      auth: true
    });
  },
  logout(context) {
    console.log('logout');
    context.commit('setAuth', {
      auth: false
    });
  }
};
