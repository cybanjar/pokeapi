import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import Router from './router'

import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
.use(Router)
.use(store)
.mount('#app');

