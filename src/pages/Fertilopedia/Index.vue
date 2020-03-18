<template lang="pug">
  q-page.q-pa-md
  
    h4.text-weight-light.q-px-md.q-my-sm Fertilopedia
    p.text-weight-light.q-px-md.q-my-sm Location based soil fertility

    p.q-px-md.q-py-sm GPS position: #[strong {{ position.coords.latitude + ', ' + position.coords.longitude }}]
    .q-pa-md
      q-card(style="height:600px;")
        l-map(:zoom="zoom" :center="center")
          l-tile-layer(:url="url" :attribution="attribution")
          l-marker(:lat-lng="center" :icon="icon")
        
</template>


<script>
import { Plugins } from '@capacitor/core'

const { Geolocation } = Plugins

import { L, latLng, icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  data() {
    return {
      position: 'determining...',
      zoom: 13,
      // center: L.latLng(47.413220, -1.219482),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl: 'statics/app-logo-128x128.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  methods: {
    getCurrentPosition() {
      Geolocation.getCurrentPosition().then(position => {
        console.log('Current', position)
        this.position = position
      })
    }
  },
  mounted() {
    this.getCurrentPosition()

    // we start listening
    this.geoId = Geolocation.watchPosition({}, (position, err) => {
      console.log('New GPS position')
      this.position = position
    })
  },
  beforeDestroy() {
    // we do cleanup
    Geolocation.clearWatch(this.geoId)
  },
  computed: {
    center() {
      return [this.position.coords.latitude, this.position.coords.longitude]
    }
  }
}
</script>
