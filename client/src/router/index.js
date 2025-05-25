import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router  