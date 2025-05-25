import { createWebHistory, createRouter } from 'vue-router'
import axios from 'axios'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

const routes = [
  { path: '/dashboard', component: HomeView, meta: { requiresAuth: true }},
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      await axios.get('/api/auth/verify'); // This endpoint should check the JWT token in cookies
      next(); // user is authenticated
    } catch (err) {
      next('/login'); // user not authenticated
    }
  } else {
    next();
  }
});

export default router  