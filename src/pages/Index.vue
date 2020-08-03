<template lang="pug">
q-page(padding)
  .column.q-col-gutter-md
    .col
      q-card
        q-card-section
          .text-h6 Share something...
        q-card-section.q-py-none
          .column.q-col-gutter-md
            q-input.col(outlined, type='text', placeholder='Title')
              template(v-slot:prepend)
                q-icon(name='title')
            q-input.col(
              outlined,
              type='textarea',
              placeholder='Enter something...'
            )
              template(v-slot:prepend)
                q-icon(name='title')
        q-card-actions.q-pa-md.justify-between
          q-btn(outline label='Select Photo', icon='image', color='primary')
          q-btn(label='Post', icon-right='send', color='primary')

    .col(v-for='feed in feeds', :key='feed._id')
      q-card(flat, bordered)
        q-img.rounded-borders(:src='feed.image')

        q-card-section(horizontal)
          q-card-section.q-pt-xs
            .text-h5.q-mt-sm.q-mb-xs {{ feed.title }}
            .text-overline {{ feed.overline }}
            .text-caption.text-grey {{ feed.caption }}

        q-separator
        q-card-actions(align='right')
          q-btn(
            type='a',
            flat,
            icon='info',
            :href='feed.link',
            label='Details'
          )
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      feeds: []
    }
  },

  mounted() {
    this.fetchFeeds()
  },

  methods: {
    fetchFeeds() {
      this.$q.loading.show()
      setTimeout(() => {
        this.feeds = [
          {
            _id: 0,
            overline: '02-Aug-2020',
            title: 'Wheat',
            caption:
              'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). The archaeological record suggests that wheat was first cultivated in the regions of the Fertile Crescent around 9600 BCE. Botanically, the wheat kernel is a type of fruit called a caryopsis.Wheat is grown on more land area than any other food crop (220.4 million hectares, 2014).[5] World trade in wheat is greater than for all other crops combined. ',
            image: 'images/banner-1.jpg',
            link: '#'
          },
          {
            _id: 1,
            overline: '02-Aug-2020',
            title: 'Wheat',
            caption:
              'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). The archaeological record suggests that wheat was first cultivated in the regions of the Fertile Crescent around 9600 BCE. Botanically, the wheat kernel is a type of fruit called a caryopsis.Wheat is grown on more land area than any other food crop (220.4 million hectares, 2014).[5] World trade in wheat is greater than for all other crops combined. ',
            image: 'images/banner-2.jpg',
            link: '#'
          },
          {
            _id: 2,
            overline: '02-Aug-2020',
            title: 'Wheat',
            caption:
              'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat (T. aestivum). The archaeological record suggests that wheat was first cultivated in the regions of the Fertile Crescent around 9600 BCE. Botanically, the wheat kernel is a type of fruit called a caryopsis.Wheat is grown on more land area than any other food crop (220.4 million hectares, 2014).[5] World trade in wheat is greater than for all other crops combined. ',
            image: 'images/baner-3.png',
            link: '#'
          }
        ]

        this.$q.loading.hide()
      }, 500)
    }
  }
}
</script>
