import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { authInstance, db } from '../firebase';
import { set, ref as Firebase, get, child } from 'firebase/database';

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

        const uid = response.user.uid;
        if (uid) {
          console.log('login - uid', uid);
          commit('setUID', uid);
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async register ({
      action,
      getters,
      dispatch
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
          name
        });
        // await this.$store.dispatch('remainders/addReminder');
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchInfo ({
      commit
    }) {
      try {
        const user = authInstance.currentUser;
        const uid = user ? user.uid : null;
        console.log('uid', uid);
        const dbRef = Firebase(db);
        const usersInfo = await get(child(dbRef, `/users/${uid}/info`)).then((user) => {
          return user.val();
        });
        console.log('usersInfo-auth', usersInfo);
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
    usersInfo: {},
    uid: null
  },
  mutations: {
    setUID (state, uid) {
      if (uid) {
        this.uid = uid;
        localStorage.setItem('uid', uid);
      }
    },
    setInfo (state, usersInfo) {
      // this.usersInfo = usersInfo;
      state.usersInfo = usersInfo;
    },
    clearInfo (state) {
      state.usersInfo = {};
    }
  },
  getters: {
    isAuth: s => s.token !== null,
    // usersInfo: s => s.usersInfo
    usersInfo (s) {
      return s.usersInfo;
    }
  }
};
