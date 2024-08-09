<template>
    <div class="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 class="text-3xl mb-15">Who's watching?</h1>
      <div class="flex space-x-8">
        <router-link  to="/home">
          <button v-for="usuario in usuarios" :key="usuario.nombre">
          <img :src="getProfileImage(usuario.perfil)" alt="Profile Image" class="flex align-middle w-32 h-32 rounded-lg mb-2 mr-5"/>
          <label>{{ usuario.nombre }}</label>
        </button>
        </router-link>
        <div class="flex flex-col items-center">
          <router-link to="/home">
            <button class="w-32 h-32 flex items-center justify-center bg-gray-600 rounded-lg mb-2">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
          </router-link>
          <label>Add Profile</label>
        </div>
      </div>
    </div>
  </template>


<script setup>
import { ref } from 'vue';
const usuarios = ref([
  {
    nombre: 'Daniel',
    apellido: 'Aguilar',
    perfil: 'Avatar_1.png'
  },
  {
    nombre: 'Valeria',
    apellido: 'Ramos',
    perfil: 'Avatar_2.png'
  }
]);

const getProfileImage = (imageName) => {
  return new URL(`/src/assets/${imageName}`, import.meta.url).href;
};
</script>