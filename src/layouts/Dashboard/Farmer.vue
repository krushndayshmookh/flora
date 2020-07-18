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
          label: 'Farmer'
        },
        {
          link: '/investor',
          icon: 'monetization_on',
          label: 'Investor'
        },
        {
          link: '/consumer',
          icon: 'shopping_cart',
          label: 'Consumer'
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
          link: '/Marketplace/market',
          icon: 'place',
          label: 'Marketplace'
        },
        {
          link: '/chatbox/chat',
          icon: 'chat',
          label: 'Chatbox'
        },
        {
          link: '/chatbox/contacts',
          icon: 'person',
          label: 'Contacts'
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
