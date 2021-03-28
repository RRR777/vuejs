import { createApp } from 'vue'
import App from './App.vue'
import PageHome from "./components/PageHome";
// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: PageHome },
    // { path: '/about', component: About },
]

// const router = VueRouter.createRouter({
//     // history: VueRouter.createWebHashHistory(),
//     history: VueRouter.createWebHistory(),
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')

//to create another Vue instance
// const anotherVueApp = createApp(App)
// anotherVueApp.component(name: 'NiceButton', component{})
// anotherVueApp.use(AnotherPlugin)
// anotherVueApp.mount('#another-app')