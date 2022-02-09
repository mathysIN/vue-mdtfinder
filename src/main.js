import { createApp } from 'vue'
import App from './App.vue'

import './styles/main.css'
import './styles/materialize.css'
import router from './router'
import './styles/tailwind.css'
import './assets/tailwind.css'
//import 'materialize-css/dist/css/materialize.min.css'
//import M from 'materialize-css'
//import './scripts/main.js'


createApp(App).use(router).mount('#app')
