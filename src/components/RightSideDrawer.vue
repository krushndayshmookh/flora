<template lang="pug">
  q-drawer(v-model="drawerOpen" show-if-above elevated side="right")

    q-list(padding)
      q-item-label(header) User Type
      q-item(clickable to="/farmer" v-ripple)
        q-item-section(avatar)
          q-icon(name="spa")
        q-item-section Farmer
      q-item(clickable to="/investor" v-ripple)
        q-item-section(avatar)
          q-icon(name="monetization_on")
        q-item-section Investor
      q-item(clickable to="/investor" v-ripple)
        q-item-section(avatar)
          q-icon(name="info")
        q-item-section Expert
      q-item(clickable to="/consumer" v-ripple)
        q-item-section(avatar)
          q-icon(name="shopping_cart")
        q-item-section Consumer

</template>

<script>
export default {
  name: 'RightSideDrawer',

  data() {
    return {}
  },

  computed: {
    drawerOpen: {
      get() {
        return this.$store.getters['general/rightSideDrawer']
      },
      set(opened) {
        this.$store.dispatch('general/setRightSideDrawer', opened)
      }
    }
  }
}
</script>
