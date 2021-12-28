import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { authInstance } from '../firebase';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'default' },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'default' },
    component: () => import('../components/Login')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { layout: 'default' },
    component: () => import('../components/Registration')
  },
  {
    path: '/page',
    name: 'Page',
    meta: { requiresAuth: true, layout: 'default' },
    component: () => import('../views/UserPage')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const user = await new Promise((resolve, reject) => {
    authInstance.onAuthStateChanged(user => {
      resolve(user);
    }, () => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(null);
    });
  });
  console.log('guard - currentUser', user);
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});
export default router;
