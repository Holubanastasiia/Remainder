import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, computed, onMounted, onUnmounted } from 'vue';

import { initializeApp } from 'firebase/app';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBeGAqPVqvCPgqpc8m2aUDOeF335mehvQM',
  authDomain: 'auth-on-vue.firebaseapp.com',
  databaseURL: 'https://auth-on-vue-default-rtdb.firebaseio.com',
  projectId: 'auth-on-vue',
  storageBucket: 'auth-on-vue.appspot.com',
  messagingSenderId: '801611194052',
  appId: '1:801611194052:web:8bac85183243c9d3e87391',
  measurementId: 'G-H2MGDBTS1W'
});

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  );

export const useAuthState = () => {
  const user = ref(null);
  const error = ref(null);

  const auth = getAuth();
  let unsubscribe;
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    );
  });
  onUnmounted(() => unsubscribe());

  const isAuthenticated = computed(() => user.value != null);

  return {
    user,
    error,
    isAuthenticated
  };
};
