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
          link: '/consumer/home',
          icon: 'dashboard',
          label: 'Home'
        },
         {
           link: '/consumer/notification',
           icon: 'notifications',
           label: 'Notifications'
         },
         {
            link: '/consumer/farm',
             icon: 'farm',
             label: 'Farm'
        },
         {
           link: '/consumer/product',
           icon: 'shopping_cart',
           label: 'Product'
         },
         {
           link: '/consumer/services',
           icon: 'shopping_cart',
           label: 'Services'
         },

         {
           link: '/consumer/encyclopedia',
           icon: 'book',
           label: 'Encyclopedia'
         },
        {
          link: '/consumer/schemes',
          icon: 'book',
          label: 'Schemes'
        },

         {
           link: '/consumer/chatbox/contacts',
           icon: 'chat',
           label: 'Forum'
         },

        {
          link: 'consumer/profile',
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
          link: 'consumer/auth/register',
          icon: 'lock',
          label: 'Register'
        },
        {
          link: 'consumer/Advisory/Forum',
          icon: 'help',
          label: 'Advisory'
        }
      ]

      this.$store.dispatch('general/setLeftSideDrawerOptions', options)
      this.$store.dispatch('general/setCurrentUserType', 'consumer')
    }
  }
}
</script>

