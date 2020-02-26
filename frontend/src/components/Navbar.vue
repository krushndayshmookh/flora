<template lang="pug">
    nav.white
      .nav-wrapper
        .sidenav-trigger.green-text(href="#" @click.stop="$emit('togglesidenav')")
          i.material-icons menu

        router-link.green-text(to="/").brand-logo { title }

        ul.right
          li
            router-link.green-text(to="/settings")
              i.material-icons settings
          
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<script>
// import M from 'materialize-css'
export default {
	name: 'Navbar',
	mounted() {
		// M.AutoInit()
	}
}
</script>
