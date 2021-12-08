import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { authInstance, db } from '../firebase';
import { set, ref } from 'firebase/database';

export default {
  actions: {
    async login ({
      dispatch,
      commit
    }, {
      email,
      password
    }) {
      try {
        await signInWithEmailAndPassword(authInstance, email, password);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async register ({
      dispatch,
      commit
    }, {
      email,
      password,
      name
    }) {
      try {
        await createUserWithEmailAndPassword(authInstance, email, password);
        const uid = await dispatch('getUid');
        await set(ref(db, `/users/${uid}/info`), {
          name
        });
      } catch (e) {
        console.log(e);
      }
    },
    getUid () {
      const user = authInstance.currentUser;
      return user != null ? user.uid : null;
    },
    async logout () {
      await signOut(authInstance);
    }
  }
};
