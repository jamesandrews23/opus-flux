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
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        handleLogin() {
            this.$axios.post('/api/auth/login', {
                email: this.email,
                password: this.password,
            }).then(response => {
                if (response.data.success) {
                    this.$router.push('/dashboard')
                } else {
                    alert('Login failed. Please check your credentials.')
                }
            }).catch(error => {
                console.error('Login error:', error)
                alert('An error occurred during login. Please try again.')
            });
        },
    },
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