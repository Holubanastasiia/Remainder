import { createStore } from 'vuex';
import auth from './auth';
import remainders from './remainders';

export default createStore({
  state: {
  },
  mutations: {
  },
  modules: { auth, remainders }
});
