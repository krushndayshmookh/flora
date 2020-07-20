<template lang="pug">
  q-layout(view="lHh Lpr lff")
    q-header(elevated)
      q-toolbar
        q-btn(flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer")
        q-toolbar-title Flora
        q-btn(flat dense round icon="notifications" aria-label="User" @click="toggleNotifications")
        //- q-btn(flat dense round icon="account_circle" aria-label="User" @click="toggleRightDrawer")
        q-btn(flat dense round icon="account_circle" aria-label="User" @click="toggleUserChooser")

    LeftSideDrawer
    RightSideDrawer

    q-dialog(v-model="showNotifications" position="top" maximized)
      Notifications

    q-dialog(v-model="showUserChooser" position="right")
      UserChooser

    q-page-container
      router-view

</template>

<script>
import LeftSideDrawer from 'components/LeftSideDrawer'
// import RightSideDrawer from 'components/RightSideDrawer'
import Notifications from 'components/Notifications'
import UserChooser from 'components/UserChooser'

export default {
  name: 'MainLayout',

  components: {
    LeftSideDrawer,
    // RightSideDrawer,
    Notifications,
    UserChooser
  },

  data() {
    return {
      showNotifications: false,
      showUserChooser: false
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.$store.dispatch('general/toggleLeftSideDrawer')
    },
    // toggleRightDrawer() {
    //   this.$store.dispatch('general/toggleRightSideDrawer')
    // },
    toggleNotifications(){
      this.showNotifications = !this.showNotifications
    },
    toggleUserChooser(){
      this.showUserChooser = !this.showUserChooser
    }
  }
}
</script>
