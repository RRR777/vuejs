import PageHome from "@/components/PageHome";
// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from "@/components/PageThreadShow";
import PageNotFound from "@/components/PageNotFound";
import sourceData from '@/data.json'

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
        props: true,
        beforeEnter (to, from, next) {
            // check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            // if exists continue
            if (threadExists) {
                return next()
            } else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    // preserve existing query and hash
                    query: to.query,
                    hash: to.hash
                })
            }
            // if doesnt exist redirect to not found
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        // eslint-disable-next-line no-undef
        component: PageNotFound
    }
]

// use Vue.Router when importing full plugin
// const router = VueRouter.createRouter({
//     // history: VueRouter.createWebHashHistory(),
//     history: VueRouter.createWebHistory(),
export default createRouter({
    history: createWebHistory(),
    routes,
})