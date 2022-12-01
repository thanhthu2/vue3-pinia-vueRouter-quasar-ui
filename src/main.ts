import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import LoginLayout from './modules/base/layouts/LoginLayout.vue'
import DefaultLayout from './modules/base/layouts/DefaultLayout.vue'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.component("LoginLayout", LoginLayout)
app.component("DefaultLayout", DefaultLayout)

app.mount('#app')
