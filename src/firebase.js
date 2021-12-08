import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBeGAqPVqvCPgqpc8m2aUDOeF335mehvQM',
  authDomain: 'auth-on-vue.firebaseapp.com',
  databaseURL: 'https://auth-on-vue-default-rtdb.firebaseio.com',
  projectId: 'auth-on-vue',
  storageBucket: 'auth-on-vue.appspot.com',
  messagingSenderId: '801611194052',
  appId: '1:801611194052:web:8bac85183243c9d3e87391',
  measurementId: 'G-H2MGDBTS1W'
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseApp);
export const authInstance = getAuth(firebaseApp);

onAuthStateChanged(authInstance, user => console.log(user));
