import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import components from '@/components/UI'

const app = createApp(App)

components.forEach(c => {
  app.component(c.name, c)
});

app.use(createPinia())
app.use(router)

app.mount('#app')
