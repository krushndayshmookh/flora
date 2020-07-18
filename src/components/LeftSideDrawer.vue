<template lang="pug">
  q-drawer(v-model="drawerOpen" show-if-above elevated)

    q-img.absolute-top(src="https://cdn.quasar.dev/img/material.png" style="height: 150px")
      .absolute-bottom.bg-transparent
        q-avatar.q-mb-sm(size="56px")
          img(src="https://cdn.quasar.dev/img/boy-avatar.png")
        .text-weight-bold Krushn Dayshmookh
        div @kdayshmookh

    q-scroll-area(style="height: calc(100% - 150px); margin-top: 150px")
      q-list
        q-item(clickable :to="option.link" v-ripple v-for="(option, idx) in drawerOptions" :key="idx")
          q-item-section(avatar)
            q-icon(:name="option.icon")
          q-item-section {{ option.label }}

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
        return this.$store.getters['general/leftSideDrawer']
      },
      set(opened) {
        this.$store.dispatch('general/setLeftSideDrawer', opened)
      }
    },
    darkMode: {
      get() {
        return this.$store.state.settings.darkMode
      },
      set(enabled) {
        this.$store.dispatch('settings/setDarkMode', enabled)
      }
    },
    drawerOptions() {
      return this.$store.getters['general/leftSideDrawerOptions']
    }
  },
  watch: {
    darkMode(enabled) {
      this.$q.dark.set(enabled)
    }
  }
}
</script>
