<template lang="pug">
  q-card.my-card(clickable v-ripple)
    q-parallax(src="https://cdn.quasar.dev/img/parallax1.jpg" :height="150")
    q-card-section
      .text-h6 Our Changing Planet
      .text-subtitle2 by John Doe
</template>

<script>
export default {
  name: 'FieldCard'
}
</script>
