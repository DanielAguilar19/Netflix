import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './Router/index.js';
import 'animate.css'; 
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(router);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');