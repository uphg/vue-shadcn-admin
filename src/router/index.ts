import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/home-page'
import IconPage from '@/pages/icon/icon-page'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/icon',
      name: 'icon',
      component: IconPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/about/about-page'),
    },
        {
      path: '/login',
      name: 'login',
      component: async () => import('@/pages/login/login-page')
    },
  ],
})

export default router
