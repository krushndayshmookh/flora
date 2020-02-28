<template lang="pug">
	#app(:class="{'sidenav-visible':showSidenav}")
		Sidenav(:trigger="showSidenav")
		Navbar(@togglesidenav="toggleSidenav")

		router-view
</template>

<style lang="scss" scoped>
#app.sidenav-visible {
	padding-left: 300px;
}
</style>

<script>
import M from 'materialize-css'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/Sidenav.vue'

export default {
	name: 'App',
	components: {
		Sidenav,
		Navbar
	},
	data() {
		return {
			showSidenav: true
		}
	},
	mounted() {
		M.AutoInit()
	},
	methods: {
		toggleSidenav() {
			this.showSidenav = !this.showSidenav
		}
	}
}
</script>
