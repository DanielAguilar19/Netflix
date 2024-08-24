<template>
    <div class="p-10 w-full h-screen bg-black text-white">
      <router-link to="/admin/operation/series">
        <Button icon="pi pi-angle-left" severity="secondary" rounded aria-label="Back"/>
      </router-link>
      <h1 class="flex justify-center mb-6 text-3xl font-bold">Agregar Serie</h1>
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center">
        <div class="w-80">
          <!-- Número de Temporadas -->
          <div class="mt-4">
            <FloatLabel>
              <InputText id="numeroTemporadas" v-model="formData.numeroTemporadas" type="number" class="w-full" />
              <label for="numeroTemporadas">Número de Temporadas</label>
            </FloatLabel>
          </div>
  
          <!-- Episodios -->
          <div class="mt-4">
            <label for="episodios" class="block text-sm font-medium text-white">Episodios</label>
            <Dropdown id="episodios" v-model="formData.listaEpisodios" :options="episodiosOptions" optionLabel="nombreEpisodio" multiple class="w-full"/>
          </div>
  
          <!-- Contenido -->
          <div class="mt-4">
            <label for="contenido" class="block text-sm font-medium text-white">Contenido</label>
            <Dropdown id="contenido" v-model="formData.contenido" :options="contenidoOptions" optionLabel="nombreContenido" class="w-full"/>
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
    numeroTemporadas: '',
    listaEpisodios: [],
    contenido: null
  });
  
  // Opciones de Dropdown (simulación)
  const episodiosOptions = ref([
    { nombreEpisodio: 'Episodio 1', id: 1 },
    { nombreEpisodio: 'Episodio 2', id: 2 }
  ]);
  
  const contenidoOptions = ref([
    { nombreContenido: 'Contenido 1', id: 1 },
    { nombreContenido: 'Contenido 2', id: 2 }
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
  