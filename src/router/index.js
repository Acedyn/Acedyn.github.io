import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../components/Home.vue")
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
        component: () => import("../components/Contact.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
