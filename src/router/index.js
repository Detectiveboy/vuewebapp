import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/theater',
    name: 'Theater',
    component: () => import('../views/Theater.vue')
  },
  {
    path: '/logoin',
    name: 'Logoin',
    component: () => import('../views/Logoin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/pinkSeats',
    name: 'PinkSeats',
    component: () => import('../views/PinkSeats.vue')
  }
]
const router = new VueRouter({
  routes
})

export default router
