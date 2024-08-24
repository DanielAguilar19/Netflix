<template>
    <div class="p-10 w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 class="text-4xl mb-6">Operaciones para Usuarios</h1>
      <p class="text-xl mb-12">Seleccione que acción desea realizar</p>
      <div class="flex justify-center space-x-8 mb-12">
        <router-link to="/crear/usuario" class="bg-gray-950 p-7 rounded-lg flex flex-col items-center w-55">
          <img class="h-16 w-16 mb-4" src="../../assets/iconos/create-svgrepo-com.svg" alt=""/>
          <p class="text-xl">Crear Usuario</p>
        </router-link>
        <router-link to="/editar/usuario" class="bg-gray-950 p-7 rounded-lg flex flex-col items-center w-55">
          <img class="h-16 w-16 mb-4" src="../../assets/iconos/edit-svgrepo-com.svg" alt=""/>
          <p class="text-xl">Editar Usuario</p>
        </router-link>
        <router-link to="/admin/home" class="bg-gray-950 p-7 rounded-lg flex flex-col items-center w-55">
          <img class="h-16 w-16 mb-4" src="../../assets/iconos/delete-1-svgrepo-com.svg" alt=""/>
          <p class="text-xl">Eliminar Usuario</p>
        </router-link>
      </div>
      <router-link to="/admin/home" class="bg-gray-600 p-5 rounded-lg w-64 text-center">
        <p class="text-xl text-neutral-900">Regresar</p>
      </router-link>
    </div>
  </template>

<script setup></script>

<style></style>