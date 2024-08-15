<template>
        <div>
        <div id="iconoSideBar"  class="py-2 mx-10 my-7">
          <Magnify fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div id="iconoSideBar" class="py-2 mx-10 my-7">
          <HomeOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div id="iconoSideBar" class="py-2 mx-10 my-7">
          <TrendingUp fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div id="iconoSideBar" class="py-2 mx-10 my-7">
          <Television fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div id="iconoSideBar" class="py-2 mx-10 my-7">
          <MovieOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div id="iconoSideBar" class="py-2 mx-10 my-7">
          <Plus fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
      </div>
</template>

<script setup>
//IMPORTE DE ICONOS DEL ASIDEBAR
import Magnify from "vue-material-design-icons/Magnify.vue";
import HomeOutline from "vue-material-design-icons/HomeOutline.vue";
import TrendingUp from "vue-material-design-icons/TrendingUp.vue";
import Television from "vue-material-design-icons/Television.vue";
import MovieOutline from "vue-material-design-icons/MovieOutline.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
</script>

<style lang="scss">

#iconoSideBar:hover{
  border-bottom-width: 4px;
  border-bottom-color: rgb(239 68 68 / 1)
}

.claseIconoSideBar{
  border-bottom-width: 4px;
  border-bottom-color: rgb(239 68 68 / 1)
}
</style>