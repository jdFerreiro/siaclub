import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Register from "./components/Register.vue";
import Login from "./views/Login.vue";

// lazy-loaded
import Profile  from "./views/Profile.vue";
import ResumePartner  from "./views/ResumePartner.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/ResumePartner",
        component: ResumePartner,
    },
/*
    {
        path: "/mod",
        component: BoardModerator,
    },
    {
        path: "/user",
        component: BoardUser,
    },
*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;