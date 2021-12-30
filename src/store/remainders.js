import { authInstance, db } from '../firebase';
import { child, get, ref as Firebase, ref, set } from 'firebase/database';

export default {
  namespaced: true,
  state: {
    user: authInstance.currentUser,
    usersRemainders: []
  },
  actions: {
    async addReminder ({ commit },
      remainder) {
      const user = authInstance.currentUser;
      const uid = await user ? user.uid : null;
      await set(ref(db, `/users/${uid}/remainders`), [remainder]);
    },
    async getRemainders ({
      commit
    }) {
      const user = authInstance.currentUser;
      const uid = user ? user.uid : null;
      const dbRef = Firebase(db);
      const usersRemainders = await get(child(dbRef, `/users/${uid}/remainders`)).then((remainders) => {
        return remainders.val();
      });
      console.log('usersRemainders', usersRemainders);
      commit('setRemainders', usersRemainders);
    }
  },
  mutations: {
    setRemainders (state, usersRemainders) {
      state.usersRemainders = usersRemainders;
    }
  },
  getters: {
    usersRemainders: s => s.usersRemainders
  }
};
