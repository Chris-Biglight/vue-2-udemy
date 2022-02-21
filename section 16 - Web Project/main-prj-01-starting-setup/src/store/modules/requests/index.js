import requestGetters from './getters';
import requestActions from './actions';
import requestMutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  getters: requestGetters,
  actions: requestActions,
  mutations: requestMutations
};
