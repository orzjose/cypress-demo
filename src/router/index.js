import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/wait', name: 'wait', component: import('../views/wait.vue') },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import('../views/fetch.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
