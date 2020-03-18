const routes = [
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: () => import('pages/Index.vue') },
      {
        path: 'encyclopedia',
        children: [
          {
            path: '',
            component: () => import('pages/Encyclopedia/Index.vue')
          },
          {
            path: 'article/:id',
            component: () => import('pages/Encyclopedia/Article.vue')
          }
        ],
        component: () => import('layouts/Dashboard/Encyclopedia.vue')
      },
      {
        path: 'farmer',
        component: () => import('layouts/Dashboard/Farmer.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/Dashboard/Farmer/Index.vue')
          },
          {
            path: 'field/:id',
            component: () => import('pages/Dashboard/Farmer/Field.vue')
          }
        ]
      },
      {
        path: 'investor',
        component: () => import('layouts/Dashboard/Investor.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/Dashboard/Investor/Index.vue')
          }
        ]
      },
      {
        path: 'consumer',
        component: () => import('layouts/Dashboard/Consumer.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/Dashboard/Consumer/Index.vue')
          }
        ]
      },
      { path: 'retina', component: () => import('pages/Retina/Index.vue') },
      { path: 'fertilopedia', component: () => import('pages/Fertilopedia/Index.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'about', component: () => import('pages/About.vue') }
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
