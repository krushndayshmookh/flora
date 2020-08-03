<template lang="pug">
q-page(padding)
  .row.q-col-gutter-md.q-mb-md
    .col-12.col-sm-6.col-md-4
      q-card.fit
        q-card-section
          h4.text-weight-light.q-mx-md.q-my-sm Fertilopedia
          p.text-weight-light.q-mx-md.q-my-sm Location based crop suggestions
        q-separator
        q-card-section
          p.q-mx-md.q-my-sm GPS position: #[strong {{ position.coords.latitude + ", " + position.coords.longitude }}]
          p.q-mx-md.q-my-sm City: #[strong Nagpur]
          p.q-mx-md.q-my-sm State: #[strong Maharashtra]

    .col-12.col-sm-6.col-md-8
      q-card(style='height:400px;')
        l-map(:zoom='zoom', :center='center')
          l-tile-layer(:url='url', :attribution='attribution')
          l-marker(:lat-lng='center', :icon='icon') 

  .row.q-col-gutter-md.q-mb-md
    .col-12
      q-card
        q-card-section
          q-btn(
            label='Request For Soil Testing',
            @click='soilTesting',
            color='primary'
          ) 

  .row.q-col-gutter-md.q-mb-md
    .col-12
      q-card
        q-splitter(v-model='splitterModel')
          template(v-slot:before)
            q-tabs.text-teal(v-model='tab', vertical)
              q-tab(name='top', icon='mail', label='Top')
              q-tab(name='incentivised', icon='alarm', label='Incentivised')
              q-tab(name='market', icon='movie', label='Market')

          template(v-slot:after)
            q-tab-panels(
              v-model='tab',
              animated,
              swipeable,
              vertical,
              transition-prev='jump-up',
              transition-next='jump-up'
            )
              q-tab-panel(name='top')
                .text-h4.q-mb-md Top Yeilds For Region

                q-list(bordered, separator)
                  q-item(
                    v-for='crop in crops',
                    :key='crop._id',
                    clickable,
                    v-ripple
                  )
                    q-item-section
                      .text-body1 {{ crop.name }}
                      .text-subtitle Average Yeild: {{ crop.avgYeild }} %
                      .text-caption Time to Harvest: {{ crop.timeToHarvest }} Days
                    q-item-section(side)
                      q-btn(
                        flat,
                        color='primary',
                        label='Wiki',
                        icon='book',
                        :to='"/encyclopedia/crop/" + crop.name'
                      )

              q-tab-panel(name='incentivised')
                .text-h4.q-mb-md Incentivized Crops

                q-list(bordered, separator)
                  q-item(
                    v-for='crop in crops',
                    :key='crop._id',
                    clickable,
                    v-ripple
                  )
                    q-item-section
                      .text-body1 {{ crop.name }}
                      .text-subtitle {{ crop.incentive.title }}
                      .text-caption {{ crop.incentive.details }}

                    q-item-section
                      .row.q-col-gutter-xs
                        .col-6
                          q-badge(outline align="middle" color="red") Required: {{ crop.incentive.requirement.required }} kg
                        .col-6
                          q-badge(outline align="middle" color="teal") Procured: {{ crop.incentive.requirement.procured }} kg
                        .col-6
                          q-badge(outline align="middle" color="brown") Planted: {{ crop.incentive.requirement.planted }} kg
                        .col-6
                          q-badge(outline align="middle" color="blue") Total: {{ crop.incentive.requirement.total }} kg
                    q-item-section(side)
                      q-btn(flat, color='primary', label='Apply', icon='edit')

              q-tab-panel(name='market')
                .text-h4.q-mb-md Market Trends

                q-list(bordered, separator)
                  q-item(
                    v-for='crop in crops',
                    :key='crop._id',
                    clickable,
                    v-ripple
                  )
                    q-item-section
                      .text-body1 {{ crop.name }}
                      
                      .row.justify-between
                        q-badge(outline align="middle" color="teal") {{ crop.market.farmers }} Farmers Cultivating
                      
                        q-badge(outline align="middle" color="blue") {{ crop.market.inRegionCenter }} kg Stored
                      
                        q-badge(outline align="middle" color="orange") {{ crop.market.planted }} Acres Planted
                      
                    q-item-section(side)
                      q-btn(
                        flat,
                        color='primary',
                        label='Trends',
                        icon='analytics',
                        :to='"/encyclopedia/crop/" + crop.name'
                      )
</template>

<script>
import { Plugins } from '@capacitor/core'

const { Geolocation } = Plugins

import { L, latLng, icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },

  data() {
    return {
      tab: 'top',
      splitterModel: 15,

      position: {
        coords: {
          latitude: 21.1458,
          longitude: 79.0882
        }
      },
      zoom: 13,
      // center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl: '/app-logo-128x128.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      }),

      crops: [
        {
          _id: 0,
          name: 'Rice',
          avgYeild: 85,
          timeToHarvest: 230,
          incentive: {
            title: 'Incentive title',
            details:
              'Incentive scheme description. long long long text. bal bla bla. Some more incentivize stuff.',
            requirement: {
              total: 100,
              procured: 40,
              planted: 15,
              required: 45
            }
          },
          market: {
            farmers: 23,
            inRegionCenter: 45,
            planted: 34
          }
        },
        {
          _id: 1,
          name: 'Wheat',
          avgYeild: 85,
          timeToHarvest: 230,
          incentive: {
            title: 'Incentive title',
            details:
              'Incentive scheme description. long long long text. bal bla bla. Some more incentivize stuff.',
            requirement: {
              total: 100,
              procured: 40,
              planted: 15,
              required: 45
            }
          },
          market: {
            farmers: 23,
            inRegionCenter: 45,
            planted: 34
          }
        },
        {
          _id: 2,
          name: 'Potato',
          avgYeild: 85,
          timeToHarvest: 230,
          incentive: {
            title: 'Incentive title',
            details:
              'Incentive scheme description. long long long text. bal bla bla. Some more incentivize stuff.',
            requirement: {
              total: 100,
              procured: 40,
              planted: 15,
              required: 45
            }
          },
          market: {
            farmers: 23,
            inRegionCenter: 45,
            planted: 34
          }
        }
      ]
    }
  },

  computed: {
    center() {
      return [this.position.coords.latitude, this.position.coords.longitude]
    }
  },

  mounted() {
    this.getCurrentPosition()

    // we start listening
    this.geoId = Geolocation.watchPosition({}, (position, err) => {
      console.log('New GPS position')
      if (position) this.position = position
    })
  },

  beforeDestroy() {
    // we do cleanup
    Geolocation.clearWatch(this.geoId)
  },

  methods: {
    getCurrentPosition() {
      Geolocation.getCurrentPosition().then(position => {
        console.log('Current', position)
        this.position = position
      })
    },

    soilTesting() {}
  }
}
</script>
