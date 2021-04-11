import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// register one global vomponent
// import AppDate from "@/components/AppDate";
import store from '@/store'

const forumApp = createApp(App)
forumApp.use(router)
forumApp.use(store)

// to register one component globally
// forumApp.component('AppDate', AppDate)

const requireComponent = require.context("./components", true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
    let baseComponentConfig = requireComponent(fileName)
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig
    const baseComponentName = baseComponentConfig.name || (
        fileName
            .replace(/^.+\//, '')
            .replace(/\.\w+$/, '')
    )
    forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')

//to create another Vue instance
// const anotherVueApp = createApp(App)
// anotherVueApp.component(name: 'NiceButton', component{})
// anotherVueApp.use(AnotherPlugin)
// anotherVueApp.mount('#another-app')