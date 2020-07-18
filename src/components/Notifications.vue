<template lang="pug">
  q-card
    q-card-section
      .text-h6 Notifications
        q-btn.float-right(flat round dense icon="close" v-close-popup)

    q-separator

    q-card-section.q-px-none
      q-list
        q-item
          q-item-section(top avatar)
            q-avatar(color="primary" text-color="white" icon="bluetooth")
          q-item-section
            q-item-label Single line item
            q-item-label(caption lines="2") Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
          q-item-section(side top)
            q-item-label(caption) 5 min ago
            q-icon(name="star" color="yellow")
        q-separator(spaced inset="item")
        q-item
          q-item-section(top avatar)
            q-avatar(color="primary" text-color="white" square icon="bluetooth")
          q-item-section
            q-item-label Single line item
            q-item-label(caption) Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
          q-item-section(side top)
            q-item-label(caption) meta
        q-separator(spaced inset="item")
        q-item
          q-item-section(top avatar)
            q-avatar
              img(src="https://cdn.quasar.dev/img/boy-avatar.png")
          q-item-section
            q-item-label Single line item
            q-item-label(caption) Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
          q-item-section(side top)
            q-badge(label="10k")
        q-separator(spaced inset="item")
        q-item
          q-item-section(top avatar)
            q-avatar(rounded)
              img(src="https://cdn.quasar.dev/img/boy-avatar.png")
          q-item-section
            q-item-label Single line item
            q-item-label(caption) Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
          q-item-section(side top)
            q-item-label(caption) meta
    
</template>

<script>
export default {
  name: 'Notifications',
  data () {
    return {}
  }
}
</script>
