import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msc',
      name: 'layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
