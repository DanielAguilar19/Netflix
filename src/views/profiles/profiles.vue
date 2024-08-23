<template>
  <div class="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
    <router-link to="/" class="absolute top-0 right-0 m-4">
      <button class="text-white">Logout</button>
    </router-link>
    <h1 class="text-3xl mb-15">Who's watching?</h1>
    <div class="flex space-x-8">
      <router-link to="/home" v-for="profile in getProfilesCurrentUser()" :key="profile.nombre" class="flex justify-center">
        <button @click="chooseProfile(profile)">
          <img :src="`/src/assets/${profile.perfil}`" alt="Profile Image" class="flex justify-items-center w-32 h-32 rounded-lg mb-2"/>
          <label id="iconoPerfil">{{ profile.nombre }}</label>
        </button>
      </router-link>
      <div class="flex flex-col items-center">
        <router-link to="/new/profile">
          <button class="w-32 h-32 flex items-center justify-center bg-gray-600 rounded-lg mb-2">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </router-link>
        <label>Add Profile</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { currentUser } from '../../Services/AuthServices';
import { selectProfile, getProfilesCurrentUser } from '../../Services/ProfileServices';

const chooseProfile = (profile) => {
  selectProfile(profile);
  console.log(profile);
};
</script>

<style scoped>
#iconoPerfil {
  display: flex;
  justify-content: center;
}
</style>
