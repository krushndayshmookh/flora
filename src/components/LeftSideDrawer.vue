<template lang="pug">
  q-drawer(v-model="drawerOpen" show-if-above elevated)

    q-img.absolute-top(src="https://cdn.quasar.dev/img/material.png" style="height: 150px")
      .absolute-bottom.bg-transparent
        q-avatar.q-mb-sm(size="56px")
          img(src="https://cdn.quasar.dev/img/boy-avatar.png")
        .text-weight-bold Krushn Dayshmookh
        div @kdayshmookh

    q-scroll-area(style="height: calc(100% - 150px); margin-top: 150px")
      q-list(padding)
        q-item(clickable to="/home" v-ripple)
          q-item-section(avatar)
            q-icon(name="dashboard")
          q-item-section Home
        q-item(clickable to="/farmer" v-ripple)
          q-item-section(avatar)
            q-icon(name="spa")
          q-item-section Farmer
        q-item(clickable to="/investor" v-ripple)
          q-item-section(avatar)
            q-icon(name="monetization_on")
          q-item-section Investor
        q-item(clickable to="/consumer" v-ripple)
          q-item-section(avatar)
            q-icon(name="shopping_cart")
          q-item-section Consumer
        q-item(clickable to="/encyclopedia" v-ripple)
          q-item-section(avatar)
            q-icon(name="book")
          q-item-section Encyclopedia
        q-item(clickable to="/profile" v-ripple)
          q-item-section(avatar)
            q-icon(name="account_circle")
          q-item-section Profile
        q-item(clickable to="/about" v-ripple)
          q-item-section(avatar)
            q-icon(name="info")
          q-item-section About

        q-item(clickable v-ripple @click="darkMode = !darkMode")
          q-item-section(avatar)
            q-icon(name="tonality")
          q-item-section Dark Mode
          q-item-section.absolute-right
            q-toggle(color="green" v-model="darkMode")

</template>

<script>
export default {
  name: 'LeftSideDrawer',
  props: ['value'],
  data() {
    return {}
  },
  created() {
    this.$q.dark.set(this.darkMode)
  },
  computed: {
    drawerOpen: {
      get() {
        return this.value
      },
      set(opened) {
        this.$emit('change', opened)
      }
    },
    darkMode: {
      get() {
        return this.$store.state.settings.darkMode
      },
      set(enabled) {
        this.$store.dispatch('settings/setDarkMode', enabled)
      }
    }
  },
  watch: {
    darkMode(enabled) {
      this.$q.dark.set(enabled)
    }
  }
}
</script>
