<template lang="pug">
  q-drawer(v-model="open" show-if-above)

    q-img.absolute-top(src="https://cdn.quasar.dev/img/material.png" style="height: 150px")
      .absolute-bottom.bg-transparent
        q-avatar.q-mb-sm(size="56px")
          img(src="https://cdn.quasar.dev/img/boy-avatar.png")
        .text-weight-bold Krushn Dayshmookh
        div @kdayshmookh

    q-scroll-area(style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd")
      q-list(padding)
        q-item(clickable to="/" v-ripple)
          q-item-section(avatar)
            q-icon(name="dashboard")
          q-item-section Dashboard
        q-item(clickable v-ripple)
          q-item-section(avatar)
            q-icon(name="star")
          q-item-section Fields
        q-item(clickable v-ripple)
          q-item-section(avatar)
            q-icon(name="account_circle")
          q-item-section Profile
        q-item(clickable v-ripple)
          q-item-section(avatar)
            q-icon(name="info")
          q-item-section About

</template>

<script>
export default {
  name: "LeftSideDrawer",
  props: ["open"]
};
</script>
