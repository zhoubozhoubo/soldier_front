import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/policy/index'
  },
  {
    path: '/policy/index',
    name: 'policy',
    component: () => import('@/views/policy/index'),
    meta: { title: '政策解读' }
  },
  {
    path: '/policy/detail',
    name: 'policyDetail',
    component: () => import('@/views/policy/detail'),
    meta: { title: '解读详情' }
  },
  {
    path: '/soldiers/index',
    name: 'soldiers',
    component: () => import('@/views/soldiers/index'),
    meta: { title: '军人风采' }
  },
  {
    path: '/soldiers/detail',
    name: 'soldiersDetail',
    component: () => import('@/views/soldiers/detail'),
    meta: { title: '军人详情' }
  },
  {
    path: '/jobs/index',
    name: 'jobs',
    component: () => import('@/views/jobs/index'),
    meta: { title: '就业服务' }
  },
  {
    path: '/jobs/detail',
    name: 'jobsDdtail',
    component: () => import('@/views/jobs/detail'),
    meta: { title: '职位信息' }
  },
  {
    path: '/activity/index',
    name: 'activity',
    component: () => import('@/views/activity/index'),
    meta: { title: '活动瞬间' }
  },
  {
    path: '/activity/detail',
    name: 'activityDetail',
    component: () => import('@/views/activity/detail'),
    meta: { title: '活动详情' }
  },
  {
    path: '/consult/index',
    name: 'consult',
    component: () => import('@/views/consult/index'),
    meta: { title: '互动咨询' }
  },
  {
    path: '/consult/form',
    name: 'consultForm',
    component: () => import('@/views/consult/form'),
    meta: { title: '互动咨询' }
  },
  {
    path: '/consult/success',
    name: 'consultSuccess',
    component: () => import('@/views/consult/success'),
    meta: { title: '互动咨询' }
  },
  {
    path: '/helpSpot/index',
    name: 'helpSpot',
    component: () => import('@/views/helpSpot/index')
  },
  {
    path: '/auth/index',
    name: 'auth',
    component: () => import('@/views/auth/index'),
    meta: { title: '实名认证 ' }
  }
]

const router = new VueRouter({
  routes
})

export default router
