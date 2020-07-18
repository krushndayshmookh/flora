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
     
   

      {
        path: 'chatbox',
        children: [
          {
            path: 'chat',
            component: () => import('pages/ChatBox/chat.vue')
          },
          {
            path: 'contacts',
            component: () => import('pages/ChatBox/contacts.vue')
          }
        ],
        component: () => import('layouts/Chatbox.vue')
      },
      { path: 'retina', component: () => import('pages/Retina/Index.vue') },
      // { path: 'marketplace', component: () => import('pages/Marketplace/market.vue') },
      {
        path: 'Marketplace',
        children: [
          {
            path: 'market',
            component: () => import('pages/Marketplace/market.vue')
          },
         
        ],
        component: () => import('layouts/Dashboard/Marketplace.vue')
      },


      {
        path: 'fertilopedia',
        component: () => import('pages/Fertilopedia/Index.vue')
      },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      // { path: 'chatbox', component: () => import('pages/ChatBox/chat.vue') },
      // { path: 'contacts', component: () => import('pages/ChatBox/contacts.vue') }
      { path: 'uploaddocument', component: () => import('pages/UploadDocuments/document.vue') }

    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/Auth/Login.vue')
      },
      {
        path: 'register',
        component: () => import('pages/Auth/Register.vue')
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
