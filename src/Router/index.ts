import { createMemoryHistory, createRouter } from 'vue-router'

import homePage from '../components/homePage.vue';
import login from '../views/login/login.vue';

const routes = [
  { path: '/', 
    component: homePage,
    name: 'inicio',
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;