const Main = () => import('@/components/Main')
export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: '主页',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]
