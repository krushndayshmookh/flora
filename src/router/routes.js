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
                    import ('layouts/Encyclopedia.vue')
            },

            {
                path: 'farmer',
                component: () =>
                    import ('layouts/Dashboard/Farmer.vue'),
                children: [
                    {
                        path: '',
                        redirect: '/home'
                    },
                    {
                        path: 'fields',
                        component: () =>
                            import ('pages/Dashboard/Farmer/Fields.vue')
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
                path: 'trader',
                component: () =>
                    import ('layouts/Dashboard/Trader.vue'),
                children: [{
                        path: '',
                        redirect: '/home'
                    },
                    {
                        path: 'orders',
                        component: () =>
                            import ('pages/Dashboard/Trader/Orders.vue')
                    },
                    {
                        path: 'products',
                        component: () =>
                            import ('pages/Dashboard/Trader/Products.vue')
                    },
                    {
                        path: 'services',
                        component: () =>
                            import ('pages/Dashboard/Trader/Services.vue')
                    }
                ]
            },

            {
                path: 'admin',
                component: () =>
                    import ('layouts/Dashboard/Admin.vue'),
                children: [{
                        path: '',
                        redirect: '/admin/statistics'
                    },
                    {
                        path: 'statistics',
                        component: () =>
                            import ('pages/Dashboard/Admin/Statistics/Index.vue')
                    },
                    {
                        path: 'statistics/region-crops',
                        component: () =>
                            import ('pages/Dashboard/Admin/Statistics/RegionCrops.vue')
                    },
                    {
                        path: 'statistics/region-crops-details',
                        component: () =>
                            import ('pages/Dashboard/Admin/Statistics/RegionCropsDetails.vue')
                    },
                    {
                        path: 'statistics/region-centers',
                        component: () =>
                            import ('pages/Dashboard/Admin/Statistics/RegionCenters.vue')
                    },
                    {
                        path: 'statistics/region-centers-details',
                        component: () =>
                            import ('pages/Dashboard/Admin/Statistics/RegionCentersDetails.vue')
                    },
                    {
                        path: 'reports',
                        component: () =>
                            import ('pages/Dashboard/Admin/Reports.vue')
                    },
                    {
                        path: 'incentive',
                        component: () =>
                            import ('pages/Dashboard/Admin/Incentive.vue')
                    },
                    {
                        path: 'incentive/new/plan',
                        component: () =>
                            import ('pages/Dashboard/Admin/IncentiveNewForm.vue')
                    },
                    {
                        path: 'incentive/new/notice',
                        component: () =>
                            import ('pages/Dashboard/Admin/IncentiveNewNotice.vue')
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
                    },
                    {
                        path: 'schemes',
                        component: () =>
                            import ('pages/Dashboard/Admin/Schemes.vue')
                    },
                    {
                        path: 'schemes/new',
                        component: () =>
                            import ('pages/Dashboard/Admin/SchemeCreate.vue')
                    },
                    {
                        path: 'schemes/:id',
                        component: () =>
                            import ('pages/Dashboard/Admin/SchemeDetails.vue')
                    }
                ]
            },

            {
                path: 'doctor',
                component: () =>
                    import ('layouts/Dashboard/Doctor.vue'),
                children: [{
                        path: '',
                        redirect: '/home'
                    },
                    {
                        path: 'appointments',
                        component: () =>
                            import ('pages/Dashboard/Doctor/Appointments.vue')
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
                    import ('layouts/Marketplace.vue'),
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
                    import ('layouts/Scheme.vue'),
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

            {
                path: 'advisory',
                children: [{
                        path: 'forum',
                        component: () =>
                            import ('pages/Advisory/Forum.vue')
                    }
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