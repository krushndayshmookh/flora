<template lang="pug">
  q-page(padding)
    .column.q-col-gutter-md
      .col(v-for="feed in feeds" :key="feed._id")
        q-card(flat bordered)
          q-card-section(horizontal)
            q-card-section.q-pt-xs
              .text-overline {{ feed.overline }}
              .text-h5.q-mt-sm.q-mb-xs {{ feed.title }}
              .text-caption.text-grey {{ feed.caption }}
            q-card-section.col-5.flex.flex-center
              q-img.rounded-borders(:src="feed.image")
          q-separator
          q-card-actions(align="right")
            q-btn(type="a" flat icon="info" :href="feed.link" label="Details")
            
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      feeds: []
    }
  },

  methods: {
    fetchFeeds() {
      this.$q.loading.show()
      setTimeout(() => {
        this.feeds = [
          {
            _id: 0,
            overline: 'Overline 0',
            title: 'Title 0',
            caption:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            link: 'https://cdn.quasar.dev/img/parallax2.jpg'
          },
          {
            _id: 1,
            overline: 'Overline 1',
            title: 'Title 1',
            caption:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            link: 'https://cdn.quasar.dev/img/parallax2.jpg'
          },
          {
            _id: 2,
            overline: 'Overline 2',
            title: 'Title 2',
            caption:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://cdn.quasar.dev/img/parallax2.jpg',
            link: 'https://cdn.quasar.dev/img/parallax2.jpg'
          }
        ]

        this.$q.loading.hide()
      }, 500)
    }
  },

  mounted() {
    this.fetchFeeds()
  }
}
</script>
