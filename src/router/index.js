import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../components/Registration')
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: () => import('../views/UserPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
