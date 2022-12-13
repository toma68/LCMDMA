import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/AuthView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    component: () => import(/* webpackChunkName: "planning" */ '../views/PlanningView.vue')
  },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue')
    },
    {
      path: '/admin/prestataires',
      name: 'adminPrestataires',
      component: () => import(/* webpackChunkName: "adminPrestataires" */ '../views/AdminPrestatairesView.vue')
    },
  {
    path: '/billeterie',
    name: 'billeterie',
    component: () => import(/* webpackChunkName: "billeterie" */ '../views/BilleterieView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
