import Home from "@/pages/Home";
import ThreadShow from "@/pages/ThreadShow";
import ThreadCreate from '@/pages/ThreadCreate'
import NotFound from "@/pages/NotFound";
import Forum from "@/pages/Forum";
import Category from "@/pages/Category";
import Profile from "@/pages/Profile";
import sourceData from '@/data.json'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      meta: { toTop: true, smoothScroll: true}
    },
    {
        path: '/me/edit',
        name: 'ProfileEdit',
        component: Profile,
        props: { edit: true }
    },
    {
        path: '/category/:id',
        name: 'Category',
        component: Category,
        props: true
    },
    {
        path: '/forum/:id',
        name: 'Forum',
        component: Forum,
        props: true
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
        beforeEnter (to, from, next) {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            if (threadExists) {
                return next()
            } else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash
                })
            }
        }
    },
    {
        path: '/form/:forumId/thread/create',
        name: 'ThreadCreate',
        component: ThreadCreate,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        // eslint-disable-next-line no-undef
        component: NotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to) {
        const scroll = {}
        if (to.meta.toTop) scroll.top = 0
        if (to.meta.smoothScroll) scroll.behavior = 'smooth'
        return scroll
    }
})