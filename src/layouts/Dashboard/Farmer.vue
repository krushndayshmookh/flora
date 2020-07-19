<template lang="pug">
  router-view
</template>

<script>
export default {
  name: 'LayoutDashboardFarmer',

  methods: {
    setLeftDrawerOptions() {
      let options = [
        {
          link: '/home',
          icon: 'dashboard',
          label: 'Home'
        },
        {
          link: '/farmer',
          icon: 'spa',
          label: 'Farm'
        },
        {
          link: '/product',
          icon: 'shopping_cart',
          label: 'Products'
        },
        {
          link: '/consumer',
          icon: 'shopping_cart',
          label: 'Services'
        },

        {
          link: '/encyclopedia',
          icon: 'book',
          label: 'Encyclopedia'
        },
        {
          link: '/retina',
          icon: 'visibility',
          label: 'Retina'
        },
        {
          link: '/chatbox/contacts',
          icon: 'chat',
          label: 'Forum'
        },
        {
          link: '/fertilopedia',
          icon: 'map',
          label: 'Fertilopedia'
        },
        {
          link: '/profile',
          icon: 'account_circle',
          label: 'Profile'
        },
        {
          link: '/about',
          icon: 'info',
          label: 'About'
        },
        {
          link: '/auth/login',
          icon: 'lock',
          label: 'Login'
        },
        {
          link: '/auth/register',
          icon: 'lock',
          label: 'Register'
        },
        {
          link: '/Advisory/Forum',
          icon: 'lock',
          label: 'Advisory'
        }
      ]

      this.$store.dispatch('general/setLeftSideDrawerOptions', options)
    }
  },

  mounted() {
    this.setLeftDrawerOptions()
  }
}
</script>
