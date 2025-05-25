<template>
    <h1>Hello Home!</h1>
    <p>Welcome to the home page of our application.</p>
    <p>Feel free to explore the features and functionalities we offer.</p>
    <button @click="logout">Logout</button>
    <p>Click the button above to log out.</p>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {};
    },
    methods: {
        logout() {
            this.$axios.post('/api/auth/logout')
                .then(() => {
                    this.$router.push('/login');
                })
                .catch(err => {
                    console.error('Logout error:', err);
                    alert('An error occurred while logging out. Please try again.');
                });
        },
    },
};
</script>