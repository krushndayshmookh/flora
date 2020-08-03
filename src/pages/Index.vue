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
            overline: '01-Aug-2020',
            title:
              'Can high-tech firms with actionable inputs eliminate uncertainties in agriculture?',
            caption:
              'Sangarmesh Talikotti has been a farmer for 20 years and is well aware of the unpredictable factors that can affect his livelihood each season. The 40-year-old also knows that he has to use a mix of the traditional knowledge acquired over the years and modern methods to minimise the risks he faces every season. So when he heard about deploying internet of things (IoT) technology in farming, Talikotti did not hesitate. In March, he spentRs 38,000 to plant three sensors on his 2.5-acre tomato farm. The artificial intelligence-driven platform from Benguluru-based agri-tech startup Fasal regularly relays information to Talikotti’s smartphone. He gets updates on when to irrigate the field, when to reap the crops, what is the risk of pest attack and where to use pesticides. Talikotti is so impressed with the system that he now intends to install sensors across his 60-acre farm where he grows papayas, brinjals and drumsticks. He is especially happy that his fate is not entirely based on the variables anymore, all thanks to Fasal. The startup, which has 30 employees, “tries to take the guesswork out of farming,” says Ananda Verma, founder & CEO. “We are a precision agriculture company with a focus on horticulture.” Using software engineers, pathologists, horticulture experts and AI experts, startups like Fasal, AgSmartic, CropIn and others collect farm data, analyse these and present helpful and remedial information to farmers. Hemant Wavhal, 35, is happy that he gave FasalRs 47,000 in February to deploy sensors on his two-acre pomegranate farm at Alephata village in Pune district. He claims to have already saved around Rs 30,000 on plant protection chemicals as the sensors pinpoint where to spray the chemical.',
            image: 'images/index-2.jpg',
            link: '#'
          },
          {
            _id: 1,
            overline: '02-Aug-2020',
            title: 'Heavy monsoon rains speed up crop planting in India',
            caption:
              'Indian farmers have planted 69.2 million hectares with summer crops, up 21.2% from this time a year earlier, according to the Ministry of Agriculture & Farmers’ Welfare, boosted by bountiful monsoon rains that spurred sowing in most parts of the country. Farmers typically start planting their summer-sown crops June 1, when monsoon rains usually reach India. Planting usually continues until the end of July or early August. Planting of rice, the key summer crop, was at 16.8 million hectares as of July 17 versus 14.2 million hectares in the previous year, the ministry said.',
            image: 'images/index-3.jpg',
            link: '#'
          },
          {
            _id: 2,
            overline: '31-July-2020',
            title: 'India’s agriculture policy dilemma',
            caption:
              'Shifting the terms of trade in favour of agriculture is the key to sustaining this dynamic change and generating positive supply responses in agriculture. Experience shows that in periods when terms of trade remained favourable to agriculture, the annual average growth in agricultural gross value added (GVA) exceeds 3%. Hitherto, the main instrument has been minimum support prices, but the experience has been that price incentives have been costly, inefficient and even distortive. India has now reached a stage in which surplus management has become a major challenge. We need to move now to policy strategies that ensure a sustained increase in farmers’ income alongside reasonable food prices for consumers,” Das said. That might not always be possible.',
            image: 'images/index-1.jpg',
            link: '#'
          }
        ]

        this.$q.loading.hide()
      }, 500)
    }
  }
}
</script>
