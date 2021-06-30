import { createWebHistory, createRouter } from "vue-router";

import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import User from '../components/User.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/detail",
        name: "Detail",
        component: Detail
    },
    // {
    //     path: "/user",
    //     name: "User",
    //     component: User
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;