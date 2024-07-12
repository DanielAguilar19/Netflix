<template>
  <homePage></homePage>
</template>

<script>
import homePage from "./components/homePage.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components:{
    homePage,
  }
});
</script>
