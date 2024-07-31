import { createMemoryHistory, createRouter } from 'vue-router'

import homePage from '../views/home/homePage.vue';
import login from '../views/login/login.vue';

const routes = [
  {
    path: '/',
    component: login,
    name: 'inicio',
  },
  {
    path: '/home',
    component: homePage,
    name: 'home',
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;