<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-btn(flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen")
        q-toolbar-title Flora
        div Quasar v{{ $q.version }}

    LeftSideDrawer(:open="leftDrawerOpen")
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

  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
