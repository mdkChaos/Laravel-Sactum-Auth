<script setup>
import axios from "axios";
import {onMounted} from "vue";

const getData = async () => {
    axios.get("/api/get")
        .then((response) => {
            console.log(response.data);
        })
};

onMounted(getData);
</script>

<template>
    <div>
        Get
    </div>
</template>

<style scoped>

</style>
