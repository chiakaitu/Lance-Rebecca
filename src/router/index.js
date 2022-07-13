// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import myHome from '../views/Home.vue'
import myResult from '../views/Result.vue'

// Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'myHome',
    component: myHome
  },
  {
    path: '/result',
    name: 'myResult',
    // route level code-splitting
    // this generates a separate chunk (add.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "add" */ '../views/Result.vue')
    component: myResult
  }
]

// const router = new VueRouter({
const router = createRouter({
    history: createWebHistory(),
//   mode: 'history',
  routes
})

export default router
