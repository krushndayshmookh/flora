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
		name: 'fields',
		component: () => import('../views/Fields.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/Register.vue')
	},
	{
		path: '/field/:id',
		name: 'Field',
		component: () => import('../views/Field.vue')
	},
	{
		path: '/market',
		name: 'Market',
		component: () => import('../views/Market.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
