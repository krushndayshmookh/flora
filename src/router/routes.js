const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            { path: '', redirect: '/home' },
            {
                path: 'home',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: 'encyclopedia',
                children: [{
                        path: '',
                        component: () =>
                            import ('pages/Encyclopedia/Index.vue')
                    },
                    {
                        path: 'new',
                        component: () =>
                            import ('pages/Encyclopedia/New.vue')
                    },
                    {
                        path: 'new-article',
                        component: () =>
                            import ('components/Encyclopedia/ArticleEdit.vue')
                    },
                    {
                        path: 'article/:id',
                        component: () =>
                            import ('components/Encyclopedia/ArticleView.vue')
                            // component: () => import('pages/Encyclopedia/Article.vue')
                    }
                ],
                component: () =>
                    import ('layouts/Dashboard/Encyclopedia.vue')
            },
            {
                path: 'farmer',
                component: () =>
                    import ('layouts/Dashboard/Farmer.vue'),
                children: [{
                        path: '',
                        component: () =>
                            import ('pages/Dashboard/Farmer/Index.vue')
                    },
                    {
                        path: 'field/:id',
                        component: () =>
                            import ('pages/Dashboard/Farmer/Field.vue')
                    },
                    {
                        path: 'report',
                        component: () =>
                            import ('pages/Dashboard/Farmer/Report.vue')
                    }
                ]
            },

            {
                path: 'admin',
                component: () =>
                    import ('layouts/Dashboard/Admin.vue'),
                children: [{
                        path: '',
                        redirect: '/admin/reports'
                    },
                    //   {
                    //     path: 'field/:id',
                    //     component: () => import('pages/Dashboard/Admin/Field.vue')
                    //   },
                    {
                        path: 'reports',
                        component: () =>
                            import ('pages/Dashboard/Admin/Reports.vue')
                    },
                    {
                        path: 'procurement',
                        component: () =>
                            import ('pages/Dashboard/Admin/Procurement.vue')
                    },
                    {
                        path: 'procurement/new/plan',
                        component: () =>
                            import ('pages/Dashboard/Admin/ProcurementPlanForm.vue')
                    },
                    {
                        path: 'procurement/new/notice',
                        component: () =>
                            import ('pages/Dashboard/Admin/ProcurementNoticeForm.vue')
                    },
                    {
                        path: 'notifications',
                        component: () =>
                            import ('pages/Dashboard/Admin/Notifications.vue')
                    },
                    {
                        path: 'farmers',
                        component: () =>
                            import ('pages/Dashboard/Admin/DBTFarmers.vue')
                    },
                    {
                        path: 'farmers/:id/profile',
                        component: () =>
                            import ('pages/Dashboard/Admin/DBTFarmerProfile.vue')
                    },
                    {
                        path: 'farmers/:id/fields',
                        component: () =>
                            import ('pages/Dashboard/Admin/DBTFarmerFields.vue')
                    }
                ]
            },

            {
                path: 'investor',
                component: () =>
                    import ('layouts/Dashboard/Investor.vue'),
                children: [{
                    path: '',
                    component: () =>
                        import ('pages/Dashboard/Investor/Index.vue')
                }]
            },
            {
                path: 'consumer',
                component: () =>
                    import ('layouts/Dashboard/Consumer.vue'),
                children: [{
                        path: 'chemical/:id',
                        component: () =>
                            import ('pages/Dashboard/Consumer/ServicesDescription.vue')
                    },
                    {
                        path: '',
                        component: () =>
                            import ('pages/Dashboard/Consumer/Index.vue')
                    }
                ]
            },
            {
                path: 'product',
                component: () =>
                    import ('layouts/Dashboard/Product.vue'),
                children: [{
                        path: '',
                        component: () =>
                            import ('pages/Dashboard/Product/Index.vue')
                    },
                    {
                        path: ':id',
                        component: () =>
                            import ('pages/Dashboard/Product/ProductDescription.vue')
                    }
                ]
            },
            {
                path: 'schemes',
                component: () =>
                    import ('layouts/Dashboard/Scheme.vue'),
                children: [{
                    path: '',
                    component: () =>
                        import ('pages/Schemes/Index.vue')
                }]
            },
            {
                path: 'chatbox',
                children: [{
                        path: 'chat/:id',
                        component: () =>
                            import ('pages/ChatBox/chat.vue')
                    },
                    {
                        path: 'contacts',
                        component: () =>
                            import ('pages/ChatBox/contacts.vue')
                    }
                ],
                component: () =>
                    import ('layouts/Chatbox.vue')
            },
            {
                path: 'retina',
                component: () =>
                    import ('pages/Retina/Index.vue')
            },
            {
                path: 'retina/trainer',
                component: () =>
                    import ('pages/Retina/Trainer.vue')
            },
            {
                path: 'retina/trainer/auto',
                component: () =>
                    import ('pages/Retina/TrainerAuto.vue')
            },

            // { path: 'Advisory', component: () => import('pages/Advisory/Forum.vue') },
            {
                path: 'Advisory',
                children: [{
                        path: 'forum',
                        component: () =>
                            import ('pages/Advisory/Forum.vue')
                    }
                    // {
                    //   path: 'contacts',
                    //   component: () => import('pages/ChatBox/contacts.vue')
                    // }
                ],
                component: () =>
                    import ('layouts/Advisory.vue')
            },
            {
                path: 'FertilizerCalci',
                children: [{
                    path: 'Index',
                    component: () =>
                        import ('pages/FertilizerCalci/Index.vue')
                }],
                component: () =>
                    import ('layouts/FertilizerCalci.vue')
            },

            {
                path: 'fertilopedia',
                component: () =>
                    import ('pages/Fertilopedia/Index.vue')
            },
            {
                path: 'profile',
                component: () =>
                    import ('pages/Profile/Index.vue')
            },
            {
                path: 'profile/setup',
                component: () =>
                    import ('pages/Profile/Setup.vue')
            },
            {
                path: 'about',
                component: () =>
                    import ('pages/About.vue')
            },
            // { path: 'chatbox', component: () => import('pages/ChatBox/chat.vue') },
            // { path: 'contacts', component: () => import('pages/ChatBox/contacts.vue') }
            {
                path: 'uploaddocument',
                component: () =>
                    import ('pages/UploadDocuments/document.vue')
            }
        ]
    },

    {
        path: '/auth',
        component: () =>
            import ('layouts/AuthLayout.vue'),
        children: [{
                path: 'login',
                component: () =>
                    import ('pages/Auth/Login.vue')
            },
            {
                path: 'register',
                component: () =>
                    import ('pages/Auth/Register.vue')
            }
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes