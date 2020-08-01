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
          link: '/investor/home',
          icon: 'dashboard',
          label: 'Home'
        },
        {
          link: '/investor/consumer',
          icon: 'shopping_cart',
          label: 'Services'
        },
        {
          link: '/investor/schemes',
          icon: 'book',
          label: 'Schemes'
        },
        {
          link: '/investor/chatbox/contacts',
          icon: 'chat',
          label: 'Forum'
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
          link: '/investor/auth/login',
          icon: 'lock',
          label: 'Login'
        },
        {
          link: '/investor/auth/register',
          icon: 'lock',
          label: 'Register'
        },
        {
          link: '/investor/Advisory/Forum',
          icon: 'help',
          label: 'Advisory'
        }
      ]

      this.$store.dispatch('general/setLeftSideDrawerOptions', options)
      this.$store.dispatch('general/setCurrentUserType', 'investor')
    }
  }
}
</script>
