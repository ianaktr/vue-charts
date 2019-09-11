import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Pie from './views/PieExample'
import Bar from './views/BarExample'

Vue.use(Router)

const routes = [
  {path: '/', component: Main},
  {path: '/pie', component: Pie},
  {path: '/bar', component: Bar}
]

const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

export default router
