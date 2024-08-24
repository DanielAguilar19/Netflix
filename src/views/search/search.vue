<template>
  <div class="p-10 w-full h-screen bg-black text-white">
    <div class="relative">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search movies..."
        class="w-full p-3 pl-10 text-black rounded-md"
      />
      <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-black"></i>
    </div>
    <div v-if="filteredMovies.length" class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="movie in filteredMovies" :key="movie.name" class="p-2 bg-gray-800 rounded-md">
        <img :src="'/images/' + movie.name + '.jpg'" alt="movie poster" class="w-full h-48 object-cover rounded-md" />
        <h3 class="text-white text-lg mt-2">{{ movie.name }}</h3>
        <p class="text-gray-400 text-sm">{{ movie.year }} • {{ movie.genre.one }}</p>
      </div>
    </div>
    <div v-else class="mt-4 text-center text-white">
      No movies found.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useMovieStore } from '../../stores/movies';
// Configuración del store
const store = useMovieStore();
const { movies } = storeToRefs(store); // Usar storeToRefs para reactividad

// Verificar si los datos del store están cargados
console.log('Datos de películas del store:', movies.value);

const searchQuery = ref('');

// Computada para filtrar películas basadas en la búsqueda
const filteredMovies = computed(() => {
  if (searchQuery.value) {
    const filtered = movies.value.filter(movie =>
      movie.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    console.log('Películas filtradas:', filtered);
    return filtered;
  }
  console.log('Todas las películas:', movies.value);
  return movies.value;
});

function filterMovies() {
  // Función para depuración
  console.log('Filtro aplicado:', searchQuery.value);
}
</script>

<style scoped>
.pi-search {
  font-size: 1.2rem;
}
</style>
