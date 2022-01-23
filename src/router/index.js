import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', name: 'home', component: Home, meta: { title: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
