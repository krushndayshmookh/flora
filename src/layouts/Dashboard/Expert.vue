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
          link: '/encyclopedia',
          icon: 'book',
          label: 'Encyclopedia'
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
