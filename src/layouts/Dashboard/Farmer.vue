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
          link: '/farmer/fields',
          icon: 'spa',
          label: 'Farm'
        },
        {
          link: '/product',
          icon: 'shopping_cart',
          label: 'Market - Products'
        },
        {
          link: '/consumer',
          icon: 'shopping_cart',
          label: 'Market - Services'
        },
        {
          link: '/retina',
          icon: 'visibility',
          label: 'Disease Detection'
        },
        {
          link: '/encyclopedia',
          icon: 'book',
          label: 'Encyclopedia'
        },
        {
          link: '/fertilopedia',
          icon: 'eco',
          label: 'Crop Suggestion'
        },
        {
          link: '/FertilizerCalci/Index',
          icon: 'calculate',
          label: 'Fertilizer Calculator'
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
