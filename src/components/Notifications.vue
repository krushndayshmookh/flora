<template lang="pug">
  q-card
    q-card-section
      .text-h6 Notifications
        q-btn.float-right(flat round dense icon="close" v-close-popup)


    q-card-section.q-pa-none
      q-list(v-for="(notif, idx) in notifications" :key="idx")
        q-item
          q-item-section(top avatar)
            q-avatar(:color="notif.color || 'primary'" text-color="white" :icon="notif.icon || 'info'")
          q-item-section
            q-item-label {{ notif.title }}
            q-item-label(caption lines="2") {{ notif.body }}
    
    q-card-actions(align="right")
      q-btn.float-left(flat dense icon="delete" label="clear" @click="clearNotifications" v-close-popup color="grey")

        
    
</template>

<script>
export default {
  name: 'Notifications',

  computed: {
    notifications() {
      return this.$store.getters['general/notifications']
    }
  },

  methods: {
    clearNotifications() {
      this.$store.dispatch('general/clearNotifications')
    }
  }
}
</script>
