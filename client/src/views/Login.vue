<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    autocomplete="username"
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    autocomplete="current-password"
                />
            </div>
            <button type="submit">Login</button>
        </form>
        <p class="register-message">
            Not a member? Register <router-link to="/register">here</router-link>
        </p>
    </div>
</template>

<script>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
    // Handle login logic here
}

export default {
    name: 'Login',
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 40px auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fff;
}
.form-group {
    margin-bottom: 1rem;
}
label {
    display: block;
    margin-bottom: 0.5rem;
}
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
}
button {
    width: 100%;
    padding: 0.75rem;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.register-message {
    margin-top: 1rem;
    text-align: center;
}
</style>