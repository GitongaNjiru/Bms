import './assets/css/bootstrap.min.css';
import './assets/css/icons.min.css';
import './assets/css/app.min.css';
import './assets/css/custom.css';
import './assets/css/map.css';



import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'



createApp(App)
    .use(router)
    .mount('#app')