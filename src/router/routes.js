const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'encyclopedia', component: () => import('pages/Encyclopedia/Index.vue') },
      { path: 'encyclopedia/article/:id', component: () => import('pages/Encyclopedia/Article.vue') },
      { path: 'farmer', component: () => import('pages/Dashboard/Farmer.vue') },
      { path: 'farmer/field/:id', component: () => import('pages/Dashboard/Field.vue') },
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
