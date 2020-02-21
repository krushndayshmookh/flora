<template lang="pug">
  #app
    Navbar
    router-view
</template>

<script>
import M from 'materialize-css'
import Navbar from '@/components/Navbar.vue'

export default {
	name: 'App',
	components: {
		Navbar
	},
	mounted() {
		M.AutoInit()
	}
}
</script>
