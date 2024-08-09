import { createWebHistory, createRouter,  } from 'vue-router'

import homePage from '../views/home/homePage.vue';
import login from '../views/login/login.vue';
import Profiles from '../views/profiles/profiles.vue';
import NewProfile from '../views/createNewProfile/newProfile.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/profiles',
    name: 'perfiles',
    component: Profiles,
  },
  {
    path: '/new/profile',
    name: 'nuevoPerfil',
    component: NewProfile,
  },
  {
    path: '/home',
    name: 'inicio',
    component: homePage,
  },
  
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router;