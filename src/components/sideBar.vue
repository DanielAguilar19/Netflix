<template>
  <div>
    <router-link to ="/search">
      <div id="iconoSideBar" class="py-2 mx-10 my-7">
        <Magnify fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>
    </router-link>
    <router-link to="/home">
      <div id="iconoSideBar" class="py-2 mx-10 my-7">
        <HomeOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>
    </router-link>
    <div id="iconoSideBar" class="py-2 mx-10 my-7">
      <TrendingUp fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
    </div>
    <router-link to="/home/series">
      <div id="iconoSideBar" class="py-2 mx-10 my-7">
        <Television fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>
    </router-link>
    <router-link to="/home/movies">
      <div id="iconoSideBar" class="py-2 mx-10 my-7">
        <MovieOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
      </div>
    </router-link>
    
    <router-link to="/profiles">
      <div id="iconoSideBar" class="py-2 mx-10 my-7">
        <img :src="`/src/assets/${selectedProfile.perfil}`" alt="Perfil" class="h-10 w-10 rounded-full cursor-pointer" @click="logout"/>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// Importación de iconos
import Magnify from "vue-material-design-icons/Magnify.vue";
import HomeOutline from "vue-material-design-icons/HomeOutline.vue";
import TrendingUp from "vue-material-design-icons/TrendingUp.vue";
import Television from "vue-material-design-icons/Television.vue";
import MovieOutline from "vue-material-design-icons/MovieOutline.vue";

import { selectedProfile } from "../Services/ProfileServices";
const router  = useRouter;
// Función de logout
const logout = () => {
  router.push('/');
};  
</script>

<style lang="scss">
#iconoSideBar:hover {
  border-bottom-width: 4px;
  border-bottom-color: rgb(239 68 68 / 1);
}
</style>