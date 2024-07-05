<script setup>
import axios from "axios";
import {reactive} from "vue";
import router from "../router.js";

const userLogin = reactive({
   email: '',
   password: '',
});

const login = async () => {
    try {
        await axios.get('/sanctum/csrf-cookie');
        await axios.post('/login', userLogin);
        await router.push({name: 'get'});
    } catch (error) {
        if (error.response && error.response.data) {
            console.error('Login failed:', error.response.data);
        } else {
            console.error('Login failed:', error);
        }
    }
};
</script>

<template>
    <div class="container col-3">
        <input v-model="userLogin.email" type="email" placeholder="E-Mail" class="form-control mb-3">
        <input v-model="userLogin.password" type="password" placeholder="Password" class="form-control mb-3">
        <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary mb-3">
    </div>
</template>

<style scoped>

</style>
