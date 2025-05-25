import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

const app = createApp(App)
app.use(router)
app.use(createPinia())

axios.defaults.withCredentials = true // Enable sending cookies with requests
app.config.globalProperties.$axios = axios // Make axios available globally

app.mount('#app')