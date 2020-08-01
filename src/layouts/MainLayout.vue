<template lang="pug">
  q-layout(view="lHh Lpr lff")
    q-header(elevated)
      q-toolbar
        q-btn(flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer")
        q-toolbar-title Flora
        q-btn(flat dense round icon="notifications" aria-label="User" @click="toggleNotifications")
          q-badge(color="red" floating v-show="notificationCount") {{ notificationCount }}
        q-btn(flat dense round class="q-mx-sm" icon="account_circle" aria-label="User" @click="toggleUserChooser")
        q-btn(flat dense round icon="person" aria-label="User" @click="toggleRightDrawer")

    LeftSideDrawer
    

    q-dialog(v-model="showNotifications" position="top" maximized)
      Notifications

    q-dialog(v-model="showUserChooser" position="right")
      UserChooser
      
    q-dialog(v-model="showRightSideDrawer" position="right")
      RightSideDrawer

    q-page-container
      router-view

</template>

<script>
import LeftSideDrawer from 'components/LeftSideDrawer'
import RightSideDrawer from 'components/RightSideDrawer'
import Notifications from 'components/Notifications'
import UserChooser from 'components/UserChooser'

export default {
  name: 'MainLayout',

  components: {
    LeftSideDrawer,
    RightSideDrawer,
    Notifications,
    UserChooser
  },

  data() {
    return {
      showNotifications: false,
      showUserChooser: false,
      showRightSideDrawer: false
    }
  },

  computed: {
    notificationCount() {
      return this.$store.getters['general/notificationCount']
    }
  },

  methods: {
    toggleLeftDrawer() {
      this.$store.dispatch('general/toggleLeftSideDrawer')
    },
    toggleRightDrawer() {
      this.showRightSideDrawer = !this.showRightSideDrawer
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications
    },
    toggleUserChooser() {
      this.showUserChooser = !this.showUserChooser
    }
  },

  sockets: {
    notification(data) {
      this.$store.dispatch('general/addNotification', data)
    }
  }
}
</script>
