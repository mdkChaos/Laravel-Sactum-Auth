import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/get',
        name: 'get',
        component: () => import('./components/Get.vue'),
    },
    {
        path: '/user/login',
        name: 'user.login',
        component: () => import('./components/Login.vue'),
    },
    {
        path: '/user/registration',
        name: 'user.registration',
        component: () => import('./components/Registration.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
