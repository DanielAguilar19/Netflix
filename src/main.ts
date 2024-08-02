import './style.css';
import 'animate.css'; 
import 'vue3-carousel/dist/carousel.css';   
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Carousel, Slide } from 'vue3-carousel';
import router from './Router/index.js';
import App from './App.vue';

const app = createApp(App);
app.use(router);
const pinia = createPinia();

app.component('Carousel', Carousel);
app.component('Slide', Slide);

app.use(pinia);
app.mount('#app');