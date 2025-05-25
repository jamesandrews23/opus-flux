<template>
    <div class="register-container">
        <h2>Register Account</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="email">Email:</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    autocomplete="email"
                />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    autocomplete="new-password"
                />
                <small v-if="password && !isPasswordValid" class="error">
                    Password must be at least 6 characters and include letters, numbers, and symbols.
                </small>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    required
                    autocomplete="new-password"
                />
                <small v-if="confirmPassword && password !== confirmPassword" class="error">
                    Passwords do not match.
                </small>
            </div>
            <button
                type="submit"
                :disabled="!canSubmit"
            >
                Register
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            loading: false,
        };
    },
    computed: {
        isPasswordValid() {
            // At least 6 chars, at least one letter, one number, one symbol
            return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/.test(this.password);
        },
        canSubmit() {
            return (
                this.email &&
                this.password &&
                this.confirmPassword &&
                this.isPasswordValid &&
                this.password === this.confirmPassword &&
                !this.loading
            );
        },
    },
    methods: {
        async handleSubmit() {
            if (!this.canSubmit) return;
            this.loading = true;
            try {
                await this.$axios.post('/api/auth/register', {
                    email: this.email,
                    password: this.password,
                });
                // Optionally, redirect or show success message
                this.$router.push('/login');
            } catch (err) {
                // Handle error (show message, etc.)
                alert(
                    err.response?.data?.message ||
                    'Registration failed. Please try again.'
                );
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.register-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fafafa;
}
.form-group {
    margin-bottom: 1.2rem;
}
label {
    display: block;
    margin-bottom: 0.3rem;
}
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
}
button {
    padding: 0.6rem 1.2rem;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:disabled {
    background: #ccc;
    cursor: not-allowed;
}
.error {
    color: #d32f2f;
    font-size: 0.9em;
}
</style>