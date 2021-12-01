import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBeGAqPVqvCPgqpc8m2aUDOeF335mehvQM',
  authDomain: 'auth-on-vue.firebaseapp.com',
  projectId: 'auth-on-vue',
  storageBucket: 'auth-on-vue.appspot.com',
  messagingSenderId: '801611194052',
  appId: '1:801611194052:web:8bac85183243c9d3e87391',
  measurementId: 'G-H2MGDBTS1W'
}
const firebaseApp = initializeApp(firebaseConfig)
export default getAuth(firebaseApp)

let app
getAuth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})
