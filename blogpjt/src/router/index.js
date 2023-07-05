import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/blog',
        name: 'works',
        component: () => import('@/views/WorkView.vue')
    },
    {
        path:'/create',
        name:'create',
        component: () => import('@/views/BlogCreateView.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/BlogDetaiilView.vue')},
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