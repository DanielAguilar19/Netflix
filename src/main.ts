import { createApp } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { createPinia } from 'pinia';

import 'vue3-carousel/dist/carousel.css';   
import 'animate.css'; 
import './style.css';

import router from './Router/index.js';
import App from './App.vue';

const app = createApp(App);
app.use(router);
const pinia = createPinia();

app.component('Carousel', Carousel);
app.component('Navigation', Navigation);
app.component('Slide', Slide);

app.use(pinia);
app.mount('#app');