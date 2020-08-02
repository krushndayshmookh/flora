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
          link: '/chatbox/contacts',
          icon: 'chat',
          label: 'Chat'
        },
        {
          link: '/advisory/forum',
          icon: 'help',
          label: 'Forum'
        }
      ]

      this.$store.dispatch('general/setLeftSideDrawerOptions', options)
      this.$store.dispatch('general/setCurrentUserType', 'investor')
    }
  }
}
</script>
