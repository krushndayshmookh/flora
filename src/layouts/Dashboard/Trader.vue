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
          link: '/trader/orders',
          icon: 'local_shipping',
          label: 'Orders'
        },
        {
          link: '/trader/products',
          icon: 'shopping_cart',
          label: 'Manage Products'
        },
        {
          link: '/trader/services',
          icon: 'shopping_cart',
          label: 'Manage Services'
        },
        {
          link: '/encyclopedia',
          icon: 'book',
          label: 'Encyclopedia'
        },
        {
          link: '/schemes',
          icon: 'announcement',
          label: 'Schemes and Loans'
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
      this.$store.dispatch('general/setCurrentUserType', 'farmer')
    }
  }
}
</script>
