<template>
    <div class="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
        <form @submit.prevent="handleSubmit" class="block bg-gray-950 p-8 rounded-lg shadow-lg w-[35vw] h-[85vh] overflow-y-scroll">
            <Button class="flex justify-self-start" icon="pi-chevron-left" severity="secondary" rounded aria-label="Filter" />
            <h1 class="text-3xl text-white font-bold mb-6 text-center">Nuevo Usuario</h1>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="pNombre" v-model="formData.p_nombre" class="w-full" />
            <label for="pNombre">Primer Nombre</label>
          </FloatLabel>
        </div>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="sNombre" v-model="formData.s_nombre" class="w-full" />
            <label for="sNombre">Segundo Nombre</label>
          </FloatLabel>
        </div>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="pApellido" v-model="formData.p_apellido" class="w-full" />
            <label for="pApellido">Primer Apellido</label>
          </FloatLabel>
        </div>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="sApellido" v-model="formData.s_apellido" class="w-full" />
            <label for="sApellido">Segundo Apellido</label>
          </FloatLabel>
        </div>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="email" v-model="formData.email" type="email" class="w-full" />
            <label for="email">Correo Electrónico</label>
          </FloatLabel>
        </div>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="password" v-model="formData.contraseña" type="password" class="w-full" />
            <label for="password">Contraseña</label>
          </FloatLabel>
        </div>
  
        <div class="mb-9">
          <label for="plan" class="block text-white mb-2">Plan de Suscripción</label>
          <Dropdown v-model="formData.id_plan" :options="plans" optionLabel="nombre" placeholder="Seleccionar Plan" class="w-full" />
        </div>
  
        <div class="mb-9">
          <FloatLabel>
            <InputText id="password" v-model="formData.id_locacion" type="password" class="w-full" />
            <label for="password">Ubicación</label>
          </FloatLabel>
        </div>
  
        <div class="text-center">
          <Button severity="danger" label="Crear Usuario" type="submit" class="w-full p-button-lg" />
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import FloatLabel from 'primevue/floatlabel';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  
  const formData = ref({
    p_nombre: '',
    s_nombre: '',
    p_apellido: '',
    s_apellido: '',
    email: '',
    contraseña: '',
    id_plan: null,
    id_locacion: null,
  });
  
  const plans = ref([
    { nombre: 'Basic - $9', id_plan: 1 },
    { nombre: 'Standard - $15', id_plan: 2 },
    { nombre: 'Premium - $20', id_plan: 3 },
  ]);
  
  const handleSubmit = () => {
    console.log('Formulario enviado:', formData.value);
  };
  
  </script>
  