<template>
    <div class="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 class="text-3xl mb-8">Who's watching?</h1>
      <div class="flex space-x-8">
        <div v-for="usuario in usuarios" :key="usuario.nombre" class="flex flex-col items-center">
          <img :src="(`${usuario.perfil}`)" alt="Profile Image" class="w-32 h-32 rounded-lg mb-2"/>
          <label>{{ usuario.nombre }}</label>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-32 h-32 flex items-center justify-center bg-gray-600 rounded-lg mb-2">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          </div>
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
</script>


<style scoped>
img{
    src: "../../assets/Avatar_1.png";
}
</style>