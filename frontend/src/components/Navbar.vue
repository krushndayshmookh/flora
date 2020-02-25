<template lang="pug">
    nav.green
      .nav-wrapper.container
        router-link(to="/").brand-logo Logo
        ul.right.hide-on-med-and-down
          li
            router-link(to="/") Home
          li
            router-link(to="/fields") Fields
          li
            router-link(to="/market") Market
          li
            router-link(to="/profile/0") Profile
          
          li
            a.dropdown-trigger(href="#!" data-target="dropdown1") Pages
              i.material-icons.right arrow_drop_down


      ul#dropdown1.dropdown-content
        li
          router-link(to="/field/0") Field
        li.divider
        li
          router-link(to="/register") Register

</template>

<script>
import M from 'materialize-css'
export default {
	name: 'Navbar',
	mounted() {
		M.Dropdown.init(document.querySelector('.dropdown-trigger'), {
			coverTrigger: false,
			hover: true,
			constrainWidth: false
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
