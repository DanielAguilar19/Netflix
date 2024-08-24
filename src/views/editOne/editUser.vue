<template>
    <div class="p-10 w-full h-screen bg-black text-white">
      <router-link to="/admin/operation/user">
        <Button icon="pi pi-angle-left" severity="secondary" rounded aria-label="Back"/>
      </router-link>
      <h1 class="flex justify-center mb-6 text-3xl font-bold">Llene sus datos</h1>
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center">
        <div class="w-80">
          <!-- Correo -->
          <div class="mt-4">
            <FloatLabel>
              <InputText id="correo" v-model="formData.correo" class="w-full" />
              <label for="correo">Correo Electrónico</label>
            </FloatLabel>
          </div>
  
          <!-- Contraseña -->
          <div class="mt-4">
            <FloatLabel>
              <InputText id="contrasenia" type="password" v-model="formData.contrasenia" class="w-full" />
              <label for="contrasenia">Contraseña</label>
            </FloatLabel>
          </div>
  
          <!-- Persona -->
          <div class="mt-4">
            <FloatLabel>
              <InputText id="persona" v-model="formData.codigoPersona" class="w-full" />
              <label for="persona">Código Persona</label>
            </FloatLabel>
          </div>
  
          <!-- Planes de Subscripción -->
          <div class="mt-4">
            <label for="planes" class="block text-sm font-medium text-white">Planes de Subscripción</label>
            <Dropdown id="planes" v-model="formData.listaPlanesSubscripcion" :options="planesOptions" optionLabel="nombre" multiple class="w-full"/>
          </div>
  
          <!-- Tarjetas de Usuario -->
          <div class="mt-4">
            <label for="tarjetas" class="block text-sm font-medium text-white">Tarjetas de Usuario</label>
            <Dropdown id="tarjetas" v-model="formData.listaTarjetasUsuario" :options="tarjetasOptions" optionLabel="numeroTarjeta" multiple class="w-full"/>
          </div>
  
          <!-- Perfiles -->
          <div class="mt-4">
            <label for="perfiles" class="block text-sm font-medium text-white">Perfiles</label>
            <Dropdown id="perfiles" v-model="formData.listaPerfiles" :options="perfilesOptions" optionLabel="nombre" multiple class="w-full"/>
          </div>
  
          <!-- Botón Enviar -->
          <div class="mt-6">
            <Button label="Enviar" severity="danger" raised class="w-full"/>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import FloatLabel from 'primevue/floatlabel';
  import InputText from 'primevue/inputtext';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  
  // Datos del formulario
  const formData = ref({
    correo: '',
    contrasenia: '',
    codigoPersona: '',
    listaPlanesSubscripcion: [],
    listaTarjetasUsuario: [],
    listaPerfiles: []
  });
  
  // Opciones de Dropdown (simulación)
  const planesOptions = ref([
    { nombre: 'Basic - $9', id_plan: 1 },
    { nombre: 'Standard - $15', id_plan: 2 },
    { nombre: 'Premium - $20', id_plan: 3 },
  ]);
  
  const tarjetasOptions = ref([
    { numeroTarjeta: '**** **** **** 1234', id: 1 },
    { numeroTarjeta: '**** **** **** 5678', id: 2 }
  ]);
  
  const perfilesOptions = ref([
    { nombre: 'Profile 1', id: 1 },
    { nombre: 'Profile 2', id: 2 }
  ]);
  
  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    console.log('Datos del formulario:', formData.value);
    // Aquí enviarías los datos al backend usando fetch o axios
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    justify-content: center;
  }
  button {
    width: 200px;
  }
  </style>
  