import router from '../router'
import type { UserModule } from '../types/modules'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = (app) => {
  app.use(router)
}
