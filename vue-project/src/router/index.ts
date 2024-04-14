import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: BoardView    
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
