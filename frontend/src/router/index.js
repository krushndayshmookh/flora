import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/fields',
		name: 'Fields',
		component: () => import('../views/FarmerFields.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue')
	},
	{
		path: '/profile/:user_id',
		name: 'Profile',
		component: () => import('../views/Profile.vue')
	},
	{
		path: '/field/:field_id',
		name: 'Field',
		component: () => import('../views/FarmerField.vue')
	},
	{
		path: '/market',
		name: 'Market',
		component: () => import('../views/Market.vue')
	},
	{
		path: '/market/dashboard',
		name: 'Market Dashboard',
		component: () => import('../views/MarketDashboard.vue')
	},
	{
		path: '/market/dashboard/transactions',
		name: 'Market Dashboard Transactions',
		component: () => import('../views/MarketDashboardTransactions.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
