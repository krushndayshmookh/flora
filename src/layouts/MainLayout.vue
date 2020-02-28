<template lang="pug">
  q-layout(view="hHh Lpr lff")
    q-header(elevated)
      q-toolbar
        q-btn(flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer")
        q-toolbar-title Flora
        div Quasar v{{ $q.version }}

    LeftSideDrawer(v-model="leftDrawerOpen" @change="toggleLeftDrawer")
    q-page-container
      router-view

</template>

<script>
import LeftSideDrawer from 'components/LeftSideDrawer'

export default {
  name: 'MainLayout',

  components: {
    LeftSideDrawer
  },

  data() {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
