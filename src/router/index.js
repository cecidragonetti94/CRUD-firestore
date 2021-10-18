import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {firebase} from '../firebase'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  },
  {
    path: '/crud',
    name: 'Crud',
    meta:{
      requiresAuth:true
    },
    component: () => import('../views/Crud.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta:{
      requiresAuth:true
    },
    component: () => import('../views/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async(to,from,next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth && !(await firebase.getCurrentUser())) {
    next('/')
  }else {
    next()
  }
})
export default router
