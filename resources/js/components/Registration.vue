<script setup>
import {reactive} from "vue";
import axios from "axios";
import router from "../router.js";

const register = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const registration = async () => {
    try {
        await axios.get('/sanctum/csrf-cookie');
        await axios.post("/register", register);
        await router.push({name: 'get'});
    } catch (error) {
        if (error.response && error.response.data) {
            console.error('Registration failed:', error.response.data);
        } else {
            console.error('Registration failed:', error);
        }
    }
};
</script>

<template>
    <div class="container col-3">
        <input v-model="register.name" type="text" placeholder="Name" class="form-control mb-3">
        <input v-model="register.email" type="email" placeholder="E-Mail" class="form-control mb-3">
        <input v-model="register.password" type="password" placeholder="Password" class="form-control mb-3">
        <input v-model="register.password_confirmation" type="password" placeholder="Password confirmation"
               class="form-control mb-3" required>
        <input @click.prevent="registration" type="submit" value="Login" class="btn btn-primary mb-3">
    </div>
</template>

<style scoped>

</style>
