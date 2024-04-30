const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Home/index.vue')//使用动态加载模式，节省首页加载性能
  },
  {
    path: '/video',
    name: '视频',
    component: () => import('../views/Video/index.vue')
  },
  {
    path: '/publish',
    name: '发布',
    component: () => import('../views/Publish/index.vue')
  },
  {
    path: '/message',
    name: '消息',
    component: () => import('../views/Message/index.vue')
  },
  {
    path: '/user',
    name: '我',
    component: () => import('../views/User/index.vue')
  },
]

export default routes

