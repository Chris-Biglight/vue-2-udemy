import { createStore } from 'vuex';

// Modules
import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';

// Root setup
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c1'
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
