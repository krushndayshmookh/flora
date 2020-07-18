<template lang="pug">
  q-page(padding)
    .column.q-col-padding-sm
      .col
        q-card
          q-card-section(horizontal)
            q-card-section.q-pt-xs
              .text-overline Overline
              .text-h5.q-mt-sm.q-mb-xs Title
              .text-caption.text-grey
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            q-card-section.col-5.flex.flex-center
              q-img.rounded-borders(src="https://cdn.quasar.dev/img/parallax2.jpg")
          q-separator
          q-card-actions
            q-btn(flat round icon="event")
            q-btn(flat)
              | 7:30PM
            q-btn(flat color="primary")
              | Reserve


</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
