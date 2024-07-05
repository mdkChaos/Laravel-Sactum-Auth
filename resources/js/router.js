import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/get',
        name: 'get',
        component: () => import('./components/Get.vue'),
        meta: {requiresAuth: true},
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
    {
        path: '/user/personal',
        name: 'user.personal',
        component: () => import('./components/Personal.vue'),
        meta: {requiresAuth: true},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('x_xsrf_token');
    console.log(accessToken);

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next();
        } else {
            return next({name: 'user.login'});
        }
    }

    if ((to.name === 'user.login' || to.name === 'user.registration') && accessToken) {
        if (to.name !== 'user.personal') {
            return next({name: 'user.personal'});
        }
    }

    next();
});

export default router;
