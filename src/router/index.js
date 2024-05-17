import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomePg.vue';
import About from '../views/AboutPg.vue';

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
