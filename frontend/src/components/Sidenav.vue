<template lang="pug">
  ul#sidenav.sidenav.green.lighten-2.sidenav-fixed

    li
      .user-view
        .background
          img(src="/sample.jpg")
        a(href="#user")
          img.circle(src="/user.png")
        a(href="#name")
          span.white-text.name John Doe
        a(href="#email")
          span.white-text.email jdandturk@gmail.com


    li
      router-link(to="/") Home
    li
      router-link(to="/fields") Fields
    li.active
      router-link(to="/market") Market
    li
      router-link(to="/profile/0") Profile

    li.no-padding
      ul.collapsible.collapsible-accordion
        li
          a.collapsible-header.green.lighten-2 Pages
            i.material-icons arrow_drop_down
          .collapsible-body.green.lighten-1
            ul
              li
                router-link(to="/field/0") Field
              li.divider.green.lighten-2.no-margin
              li
                router-link(to="/register") Register
              li.divider.green.lighten-2.no-margin
              li
                router-link(to="/market/dashboard") Market Dashboard
              li
                router-link(to="/market/dashboard/transactions") Transactions
              li.divider.green.lighten-2.no-margin
              li
                router-link(to="/about") About

</template>

<script>
import M from 'materialize-css'
export default {
	name: 'Sidenav',
	props: ['trigger'],
	watch: {
		trigger(val) {
			console.log(this.instance)
			if (val) {
				this.instance.open()
			} else {
				this.instance.close()
			}
		}
	},
	data() {
		return {
			instance: ''
		}
	},
	mounted() {
		M.Collapsible.init(document.querySelectorAll('.collapsible'), {})
		this.instance = M.Sidenav.init(document.querySelector('#sidenav'), {})
	}
}
</script>
