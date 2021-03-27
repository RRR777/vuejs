import { createApp } from 'vue'
import App from './App.vue'

const forumApp = createApp(App)
forumApp.mount('#app')

//to create another Vue instance
// const anotherVueApp = createApp(App)
// anotherVueApp.component(name: 'NiceButton', component{})
// anotherVueApp.use(AnotherPlugin)
// anotherVueApp.mount('#another-app')