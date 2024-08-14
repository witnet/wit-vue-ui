import './assets/main.css'
import './assets/colors.scss'

import { createApp } from 'vue'
import App from './App.vue'

import vWitnet from './index'

createApp(App)
.use(vWitnet)
.mount('#app')
