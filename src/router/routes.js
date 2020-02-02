
const routes = [
  {
    path: '/auth',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/myckcm',
    component: () => import('pages/auth/loginNow.vue')
  },
  {
    path: '/',
    component: () => import('layouts/studentLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
