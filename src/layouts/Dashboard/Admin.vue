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
          link: '/admin/statistics',
          icon: 'analytics',
          label: 'Statistics'
        },
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
          icon: 'account_balance_wallet',
          label: 'DBT'
        },
        {
          link: '/admin/schemes',
          icon: 'book',
          label: 'Schemes'
        },
        {
          link: '/admin/procurement',
          icon: 'eco',
          label: 'Procurement'
        },
        {
          link: '/admin/incentive',
          icon: 'redeem',
          label: 'Incentives'
        },
        {
          link: '/admin/market',
          icon: 'money',
          label: 'Market Pricing Monitor'
        },
        {
          link: '/admin/plants',
          icon: 'spa',
          label: 'Crop Types'
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
