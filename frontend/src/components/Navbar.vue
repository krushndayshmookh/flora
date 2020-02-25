<template lang="pug">
    nav.green
      .nav-wrapper.container
        router-link(to="/").brand-logo Logo
        ul.right.hide-on-med-and-down
          li
            router-link(to="/dashboard") Dashboard
          li
            router-link(to="/market") Market
          li
            router-link(to="/field/0") Field
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
