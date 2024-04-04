import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    }
  ],
});