<template lang="pug">
  q-layout(view="lHh Lpr lff")
    q-header(elevated)
      q-toolbar
        q-btn(flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer")
        q-toolbar-title Flora
        q-btn(flat dense round icon="account_circle" aria-label="User" @click="toggleRightDrawer")

    LeftSideDrawer
    RightSideDrawer
    q-page-container
      router-view

</template>

<script>
import LeftSideDrawer from 'components/LeftSideDrawer'
import RightSideDrawer from 'components/RightSideDrawer'

export default {
  name: 'MainLayout',

  components: {
    LeftSideDrawer,
    RightSideDrawer
  },

  data() {
    return {
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.$store.dispatch('general/toggleLeftSideDrawer')
    },
    toggleRightDrawer() {
      this.$store.dispatch('general/toggleRightSideDrawer')
    }
  }
}
</script>
