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
  const currentUser = authInstance.currentUser;
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }
});
export default router;
