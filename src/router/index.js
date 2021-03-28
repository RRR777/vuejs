import PageHome from "@/components/PageHome";
// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from "@/components/PageThreadShow";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true
    },
]

// use Vue.Router when importing full plugin
// const router = VueRouter.createRouter({
//     // history: VueRouter.createWebHashHistory(),
//     history: VueRouter.createWebHistory(),
export default createRouter({
    history: createWebHistory(),
    routes,
})