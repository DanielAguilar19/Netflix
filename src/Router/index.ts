import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '../Services/AuthServices';

import homePage from '../views/home/homePage.vue';
import login from '../views/login/login.vue';
import Profiles from '../views/profiles/profiles.vue';
import NewProfile from '../views/createNewProfile/newProfile.vue';
import NewUser from '../views/newUser/newUser.vue';
import HomeSeriePage from '../views/home/homeSeriePage.vue';
import HomeMoviePage from '../views/home/homeMoviePage.vue';
import AdminHome from '../views/adminHome/adminHome.vue';
import adminOperationMovie from '../views/adminOperation/adminOperationMovie.vue';
import adminOperationSerie from '../views/adminOperation/adminOperationSerie.vue';
import adminOperationUser from '../views/adminOperation/adminOperationUser.vue';
const routes: Array<RouteRecordRaw> = [
  //RUTAS PARA EL USUARIO
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
  { path: '/home/series', name: 'series', component: HomeSeriePage },
  { path: '/home/movies', name: 'peliculas', component: HomeMoviePage },
  //RUTAS PARA EL ADMIN
  {path: '/admin/home', name: 'homeAdmin', component: AdminHome },
  {path: '/admin/operation/movies', name: 'adminMovie', component: adminOperationMovie },
  {path: '/admin/operation/series', name: 'adminMSerie', component: adminOperationSerie },
  {path: '/admin/operation/user', name: 'adminUser', component: adminOperationUser },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;