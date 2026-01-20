import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons'

library.add(faPerson, faPersonDress)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
