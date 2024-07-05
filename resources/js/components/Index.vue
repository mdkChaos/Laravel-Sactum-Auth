<template>
    <div class="p-3">
        <nav class="nav mb-3 d-flex justify-content-between align-items-center">
            <div>
                <router-link v-if="token" class="btn btn-outline-primary me-3" :to="{ name: 'get' }">Get</router-link>
                <router-link v-if="token" class="btn btn-outline-primary me-3" :to="{ name: 'user.personal' }">Personal</router-link>
                <router-link v-if="!token" class="btn btn-outline-primary me-3" :to="{ name: 'user.login' }">Login</router-link>
                <router-link v-if="!token" class="btn btn-outline-primary me-3" :to="{ name: 'user.registration' }">Registration</router-link>
            </div>
            <div class="d-flex align-items-center">
                <a href="#" @click.prevent="logout" v-if="token" class="btn btn-outline-danger">Logout</a>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup>
import router from "../router.js";
import {onMounted, ref, watch} from "vue";

const token = ref('');

const getToken = () => {
    token.value = localStorage.getItem('x_xsrf_token');
};

const logout = async () => {
    await axios.post('/logout');
    localStorage.removeItem('x_xsrf_token');
    await router.push({name: 'user.login'});
};

onMounted(() => {
    getToken();
});

watch(() => router.currentRoute.value.name, () => {
    getToken();
});
</script>

<style scoped>

</style>
