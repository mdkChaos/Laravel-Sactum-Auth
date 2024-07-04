<template>
    <div>
        <nav class="nav mb-3 d-flex justify-content-between align-items-center">
                <router-link class="btn btn-outline-primary me-3" :to="{ name: 'get' }">Get</router-link>
                <router-link class="btn btn-outline-primary me-3" :to="{ name: 'user.login' }">Login</router-link>
                <router-link class="btn btn-outline-primary me-3" :to="{ name: 'user.registration' }">Registration</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
