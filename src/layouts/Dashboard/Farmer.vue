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
          link: '/farmer/home',
          icon: 'dashboard',
          label: 'Home'
        },
        {
          link: '/farmer/farm',
          icon: 'spa',
          label: 'Farm'
        },
        {
          link: '/farmer/product',
          icon: 'shopping_cart',
          label: 'Products'
        },
        {
          link: '/farmer/consumer',
          icon: 'shopping_cart',
          label: 'Services'
        },

        {
          link: '/farmer/encyclopedia',
          icon: 'book',
          label: 'Encyclopedia'
        },
        {
          link: '/farmer/schemes',
          icon: 'book',
          label: 'Schemes'
        },
        {
          link: '/farmer/retina',
          icon: 'visibility',
          label: 'Retina'
        },
        {
          link: '/farmer/chatbox/contacts',
          icon: 'chat',
          label: 'Forum'
        },
        {
          link: '/farmer/fertilopedia',
          icon: 'map',
          label: 'Fertilopedia'
        },
        {
          link: '/farmer/FertilizerCalci/Index',
          icon: 'business',
          label: 'FertilizerCalci'
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
          link: '/farmer/auth/login',
          icon: 'lock',
          label: 'Login'
        },
        {
          link: '/farmer/auth/register',
          icon: 'lock',
          label: 'Register'
        },
        {
          link: '/farmer/Advisory/Forum',
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
