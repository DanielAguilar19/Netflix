import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '../Services/AuthServices';

import homePage from '../views/home/homePage.vue';
import login from '../views/login/login.vue';
import Profiles from '../views/profiles/profiles.vue';
import NewProfile from '../views/createNewProfile/newProfile.vue';
import NewUser from '../views/newUser/newUser.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'login', component: login },
  { path: '/new/user', name: 'nuevoUsuario', component: NewUser },
  {
    path: '/profiles',
    name: 'perfiles',
    component: Profiles,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  { path: '/new/profile', name: 'nuevoPerfil', component: NewProfile },
  { path: '/home', name: 'inicio', component: homePage },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;