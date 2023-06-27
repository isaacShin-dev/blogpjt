import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/works',
        name: 'works',
        component: () => import('@/views/WorkView.vue')
    },
    {
        path: '/log',
        name: 'log',
        component: () => import('@/views/LogView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router}