<template>
    <div class="p-10 w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 class="text-4xl mb-6">Bienvenido Administrador</h1>
      <p class="text-xl mb-12">Seleccione que tipo de contenido a trabajar</p>
      <div class="flex justify-center space-x-6 mb-12">
        <router-link to="/admin/operation/movies" class="bg-gray-950 p-7 rounded-lg flex flex-col items-center w-40">
          <img class="h-16 w-16 mb-4" src="../../assets/iconos/movie-film-roll-for-movie-svgrepo-com.svg" alt=""/>
          <p class="text-xl">Peliculas</p>
        </router-link>
        <router-link to="/admin/operation/series" class="bg-gray-950 p-7 rounded-lg flex flex-col items-center w-40">
          <img class="h-16 w-16 mb-4" src="../../assets/iconos/tv-television-svgrepo-com.svg" alt=""/>
          <p class="text-xl">Series</p>
        </router-link>
        <router-link to="/admin/operation/user" class="bg-gray-950 p-7 rounded-lg flex flex-col items-center w-40">
          <img class="h-16 w-16 mb-4" src="../../assets/iconos/tv-television-svgrepo-com.svg" alt=""/>
          <p class="text-xl">Usuarios</p>
        </router-link>
      </div>
    </div>
  </template>

<script setup></script>

<style></style>