<template>
  <div class="min-w-[100] relative bg-transparent">
    <div class="flex justify-between mr-6">
      <div
        class="flex items-center font-semibold text-white text-2xl cursor-pointer"
      >
        {{ category }}
      </div>
    </div>

    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="8"
      :items-to-scroll="1"
      :wrap-around="true"
      :transition="500"
      snapAlign="start"
      class="flex justify-items-start bg-transparent w-[100vw] h-[30vh]"
    >
      <Slide
        v-for="(slide, index) in movies"
        :key="slide"
        class="flex items-center object-cover text-white bg-transparent"
      >
        <div
          @click="fullScreenVideo(index)"
          class="object-cover h-[50vh] hover:brightness-125 cursor-pointer"
          :class="
            (currentSlide !== index
              ? 'border-4 border-transparent'
              : 'border-4 border-white',
            currentSlideObject(slide, index))
          "
        >
          <img
            style="user-select: none"
            class="pointer-events-none  z-[-1]"
            :src="'/images/' + slide.name + '.png'"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { storeToRefs } from "pinia";
import { useMovieStore } from "../stores/movies";
import 'vue3-carousel/dist/carousel.css';
const useMovie = useMovieStore();
const { movie, showFullVideo } = storeToRefs(useMovie);


let currentSlide = ref(0);

const props = defineProps({ category: String, movies: Array });

const { movies, category } = toRefs(props);

const currentSlideObject = (slide, index) => {
  if (index === currentSlide.value) {
    movie.value = slide;
  }
};

const fullScreenVideo = (index) => {
  currentSlide.value = index;
  setTimeout(() => (showFullVideo.value = true), 500);
};

</script>

<style >
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
  color: white;
}
</style>