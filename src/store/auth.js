import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { useStore } from 'vuex'

const database = getDatabase()

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
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password).then(() => {
          console.log(auth)
        })
      } catch (e) {
        commit('setError', e)
        console.log(e)
      }
    }
  },
  async register ({
    dispatch,
    commit
  }, {
    email,
    password,
    userName
  }) {
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email, password)
      const uid = useStore().dispatch('getUid')
      await database.ref(`/users/${uid}/info`).set({
        userName
      })
    } catch (e) {
      commit('setError', e)
      console.log(e)
    }
  },
  getUid () {
    const user = getAuth().currentUser
    return user ? user.uid : null
  }
}
