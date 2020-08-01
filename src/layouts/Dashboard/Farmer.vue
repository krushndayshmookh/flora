<template lang="pug">
  router-view
</template>

<script>
export default {
  name: 'LayoutDashboardFarmer',

  mounted() {
    this.setLeftDrawerOptions()
  },

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
          link: '/schemes',
          icon: 'book',
          label: 'Schemes'
        },
        {
          link: '/retina',
          icon: 'visibility',
          label: 'Disease Detection'
        },
        {
          link: '/chatbox/contacts',
          icon: 'chat',
          label: 'Forum'
        },
        {
          link: '/fertilopedia',
          icon: 'map',
          label: 'Crop Suggestion'
        },
        {
          link: '/FertilizerCalci/Index',
          icon: 'business',
          label: 'Fertilizer Calculator'
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
          icon: 'help',
          label: 'Advisory'
        }
      ]

      this.$store.dispatch('general/setLeftSideDrawerOptions', options)
      this.$store.dispatch('general/setCurrentUserType', 'farmer')
    }
  }
}
</script>
