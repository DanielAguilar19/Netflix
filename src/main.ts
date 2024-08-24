import { createApp } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { createPinia } from 'pinia';

import 'vue3-carousel/dist/carousel.css'; 
import 'primeicons/primeicons.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'animate.css'; 
import './style.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './Router/index.js';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
    
const app = createApp(App);
const pinia = createPinia();

app.component('Carousel', Carousel);
app.component('Navigation', Navigation);
app.component('Slide', Slide);

app.use(router);
app.use(pinia);
app.use(VueSweetalert2);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.mount('#app');