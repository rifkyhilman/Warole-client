import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootsrtap from 'bootstrap/dist/js/bootstrap.bundle'


createApp(App).use(router).use(bootsrtap).mount('#app')
