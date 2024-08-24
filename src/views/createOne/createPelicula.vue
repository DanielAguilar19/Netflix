<template>
    <div class="p-10 w-full h-screen bg-black text-white">
      <router-link to="/admin/operation/movies">
        <Button icon="pi pi-angle-left" severity="secondary" rounded aria-label="Back"/>
      </router-link>
      <h1 class="flex justify-center mb-6 text-3xl font-bold">Agregar Película</h1>
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center">
        <div class="w-80">
          <!-- Duración -->
          <div class="mt-4">
            <FloatLabel>
              <InputText id="duracion" v-model="formData.duracion" class="w-full" />
              <label for="duracion">Duración</label>
            </FloatLabel>
          </div>
  
          <!-- Contenido -->
          <div class="mt-4">
            <label for="contenido" class="block text-sm font-medium text-white">Contenido</label>
            <Dropdown id="contenido" v-model="formData.contenido" :options="contenidoOptions" optionLabel="nombreContenido" class="w-full"/>
          </div>
  
          <!-- Idiomas -->
          <div class="mt-4">
            <label for="idiomas" class="block text-sm font-medium text-white">Idiomas</label>
            <Dropdown id="idiomas" v-model="formData.listaPeliculasPorIdiomas" :options="idiomasOptions" optionLabel="nombreIdioma" multiple class="w-full"/>
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
    duracion: '',
    contenido: null,
    listaPeliculasPorIdiomas: []
  });
  
  // Opciones de Dropdown (simulación)
  const contenidoOptions = ref([
    { nombreContenido: 'Contenido 1', id: 1 },
    { nombreContenido: 'Contenido 2', id: 2 }
  ]);
  
  const idiomasOptions = ref([
    { nombreIdioma: 'Español', id: 1 },
    { nombreIdioma: 'Inglés', id: 2 },
    { nombreIdioma: 'Francés', id: 3 }
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
  