import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/auth/Login.vue';
import Signup from '../components/auth/Signup.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import view360 from '../components/360/view360.vue';
import Admin from '../components/dashboard/Admin.vue';

import Floor from '../components/floor_plan/floor.vue';
import Utils from '../components/utils_ex/utils_ex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Dashboard/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/signup/',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/admin/',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/three/',
    name: 'Three',
    component: view360,
  },
  {
    path: '/floor/',
    name: 'Floor',
    component: Floor,
  },
  {
    path: '/utils/',
    name: 'Utils',
    component: Utils,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
