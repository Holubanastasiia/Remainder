import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import { getUserState } from '../firebase';

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
    path: '/auth',
    name: 'Auth',
    meta: { layout: 'default' },
    component: () => import('../views/Auth')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { layout: 'default' },
    component: () => import('../components/Registration')
  },
  {
    path: '/page/:id',
    name: 'Page',
    meta: { requiresAuth: true, layout: 'default' },
    component: () => import('../views/UserPage')
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth);
//
//   const isAuth = await getUserState();
//
//   if (requiresAuth && !isAuth) {
//     next('/login');
//   } else if (requiresUnauth && isAuth) {
//     next('/page/:id');
//   } else {
//     next();
//   }
// });

export default router;
