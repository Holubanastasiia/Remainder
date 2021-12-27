import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { authInstance, db } from '../firebase';
import { set, ref as Firebase, get, child } from 'firebase/database';
// import { ref } from 'vue';

export default {
  namespaced: true,
  actions: {
    async login ({
      dispatch,
      commit
    }, {
      email,
      password
    }) {
      try {
        const response = await signInWithEmailAndPassword(authInstance, email, password);

        const token = await response.user.getIdToken();
        if (token) {
          console.log('token', token);
          commit('setToken', token);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async register ({
      action,
      getters
    }, {
      email,
      password,
      name
    }) {
      try {
        await createUserWithEmailAndPassword(authInstance, email, password);
        const user = authInstance.currentUser;
        const uid = await user ? user.uid : null;
        console.log('uid', uid);
        await set(Firebase(db, `/users/${uid}/info`), {
          name,
          remainderText: '',
          date: ''
        });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchInfo ({
      dispatch,
      commit,
      getters
    }) {
      try {
        const user = authInstance.currentUser;
        const uid = user ? user.uid : null;
        console.log('uid', uid);
        const dbRef = Firebase(db);
        const usersInfo = await get(child(dbRef, `/users/${uid}/info`)).then((user) => {
          return user.val();
        });
        console.log('usersInfo', usersInfo);
        commit('setInfo', usersInfo);
      } catch (e) {
        console.log(e);
      }
    },
    async logout ({ commit }) {
      await signOut(authInstance);
      commit('clearInfo');
      localStorage.clear();
    }
  },
  state: {
    isAuth () {
      return this.token !== null;
    },
    usersInfo: {}
  },
  mutations: {
    setToken (state, token) {
      if (token) {
        localStorage.setItem('user', token);
        state.isAuth = !!token;
      } else {
        localStorage.clear();
      }
    },
    setInfo (state, usersInfo) {
      state.usersInfo = usersInfo;
    },
    clearInfo (state) {
      state.usersInfo = {};
    }
  },
  getters: {
    isAuth: s => s.localStorage.getItem('user'),
    usersInfo: s => s.usersInfo
  }
};
