import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* layout */
const CommonLayout = () => import('@/layout/CommonLayout')

/* 首页 */
const Dashboard = () => import('@/pages/home')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/common',
      component: CommonLayout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})

export default router
