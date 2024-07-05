<template>
    <div class="p-3">
        <nav class="nav mb-3 d-flex justify-content-between align-items-center">
            <div>
                <router-link class="btn btn-outline-primary me-3" :to="{ name: 'get' }">Get</router-link>
                <router-link class="btn btn-outline-primary me-3" :to="{ name: 'user.login' }">Login</router-link>
                <router-link class="btn btn-outline-primary me-3" :to="{ name: 'user.registration' }">Registration</router-link>
            </div>
            <div class="d-flex align-items-center">
                <a href="#" @click.prevent="logout" class="btn btn-outline-danger">Logout</a>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup>
import router from "../router.js";

const logout = async () => {
    await axios.post('/logout');
    await router.push({name: 'user.login'});
};
</script>

<style scoped>

</style>
