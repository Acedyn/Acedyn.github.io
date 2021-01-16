import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../components/About.vue")
    },  
    {
        path: "/portfolio",
        name: "Portfolio",
        component: () => import("../components/Portfolio.vue")
    },
    {
        path: "/contact",
        name: "Concact",
        component: () => import("../components/Concact.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
