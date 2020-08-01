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
          link: '/admin/reports',
          icon: 'report',
          label: 'Reports'
        },
        {
          link: '/admin/notifications',
          icon: 'notifications',
          label: 'Notifications'
        },
        {
          link: '/admin/farmers',
          icon: 'spa',
          label: 'Farmers'
        },
        {
          link: '/admin/farmers',
          icon: 'book',
          label: 'Schemes'
        },{
          link: '/admin/farmers',
          icon: 'money',
          label: 'Market Pricing Monitor'
        },
        {
          link: '/admin/farmers',
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
        }
      ]

      this.$store.dispatch('general/setLeftSideDrawerOptions', options)
      this.$store.dispatch('general/setCurrentUserType', 'admin')
    }
  }
}
</script>
