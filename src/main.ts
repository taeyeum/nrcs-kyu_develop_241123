import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

//Admin LTE Bootstrap 으로 대체
//import { BootstrapVue3 } from 'bootstrap-vue-3'
//import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
//import 'bootstrap-icons/font/bootstrap-icons.css';

import "./assets/css/index.css"
import "vue-final-modal/style.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import App from './App.vue'
import { router } from "./components"

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(createPinia())
app.use(createVfm())


//app.use(BootstrapVue3)
//app.use(axios)
//app.use(BootstrapVueTreeview)
//app.use(MenuIcon)
app.use(router)

app.mount('#app')
