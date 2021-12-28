import { createStore } from 'vuex';
import auth from './auth';
import useInfo from './useInfo';

export default createStore({
  state: {
  },
  mutations: {
  },
  modules: { auth, useInfo }
});
