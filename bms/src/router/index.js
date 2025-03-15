import { createRouter, createWebHistory } from 'vue-router';
import Loginpage from '@/components/Loginpage.vue';
import Register from '@/components/Register.vue';

const routes = [
  { path: '/login', name: 'Login', component: Loginpage },
  { path: '/register', name: 'Register', component: Register },
  { path: '/', redirect: '/register' } // ✅ Redirect '/' to Register
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
