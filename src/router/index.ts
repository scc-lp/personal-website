import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: () => import('../views/Konwleage.vue')
    }
  ]
})

export default router