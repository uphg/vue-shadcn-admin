import type { UserModule } from './types/modules'
import './assets/styles/tailwind.css'
// import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

loadPlugins(app)
app.mount('#app')

function loadPlugins(app: ReturnType<typeof createApp>) {
  // Here you can set up other plugins if needed
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(app))
}