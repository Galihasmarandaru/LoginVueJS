import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    // path: '/about/:userName',
    path: '/about/',
    name: 'About',
    component: About,
  }, 
  {
    path: '/signup/',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
