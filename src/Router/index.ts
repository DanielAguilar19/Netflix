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
import CreateUser from '../views/createOne/createUser.vue';
import EditUser from '../views/editOne/editUser.vue';
import CreatePelicula from '../views/createOne/createPelicula.vue';
import EditPelicula from '../views/editOne/editPelicula.vue';
import CreateSerie from '../views/createOne/createSerie.vue';
import EditSerie from '../views/editOne/editSerie.vue';
import Search from '../views/search/search.vue';


const routes: Array<RouteRecordRaw> = [
  //RUTAS PARA EL USUARIO
  { path: '/', name: 'login', component: login },
  { path: '/new/user', name: 'nuevoUsuario', component: NewUser,},
  {
    path: '/profiles', name: 'perfiles', component: Profiles,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  { path: '/new/profile', name: 'nuevoPerfil', component: NewProfile,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
   },
  { path: '/home', name: 'inicio', component: homePage ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {  path: '/home/series', name: 'series', component: HomeSeriePage ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  }, 
  { path: '/home/movies', name: 'peliculas', component: HomeMoviePage ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  }, 
  //RUTAS PARA EL ADMIN
  {path: '/admin/home', name: 'homeAdmin', component: AdminHome ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  }, 
  {path: '/admin/operation/movies', name: 'adminMovie', component: adminOperationMovie  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/admin/operation/series', name: 'adminMSerie', component: adminOperationSerie  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/admin/operation/user', name: 'adminUser', component: adminOperationUser  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/search', name: 'buscador', component: Search  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/crear/usuario', name: 'crearUsuario', component: CreateUser  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/editar/usuario', name: 'editarUsuario', component: EditUser  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/crear/pelicula', name: 'crearPelicula', component: CreatePelicula  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/editar/pelicula', name: 'editarPelicula', component: EditPelicula  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/crear/serie', name: 'crearSerie', component: CreateSerie  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
  {path: '/editar/serie', name: 'editarSerie', component: EditSerie  ,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;