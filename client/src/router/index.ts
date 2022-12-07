
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import Login from '../views/Login.vue'
import Product from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/store',
        name: 'store',
        component: StoreView,
    },


  {
      path: '/login',
      name: 'login',
      component: Login,
  },

  {
    path: '/product/:id',
    name: 'product',
    component: Product,
 },
   
  ]
})

export default router