<template lang="pug">
  q-card
    q-img(:src="normalizedField.image" style="height: 150px;")

    q-card-section
      .text-overline {{ normalizedField.area }} Acres
      .text-h6 {{ normalizedField.title }}
      .text-subtitle2 {{ normalizedField.crop.plant.name }}

      .text-caption {{ normalizedField.region.name }}
    q-card-actions
      q-btn.full-width(v-ripple outline  :to="'/farmer/field/' + field._id") View
</template>

<script>
export default {
  name: 'FieldCard',
  props: {
    field: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {}
  },

  computed: {
    normalizedField() {
      const base = {
        _id: 0,
        image: this.setImage(),
        title: '',
        area: 0,
        crop: {
          plant: {
            name: 'Unoccupied'
          }
        },
        currentlyOccupied: false,
        region: {
          name: 'unknown region'
        }
      }
      return { ...base, ...this.field }
    }
  },

  methods: {
    setImage() {
      const images = [
        '/images/banner-1.jpg',
        '/images/banner-2.jpg',
        '/images/baner-3.png'
      ]
      let img = Math.floor((Math.random() * 3) % 3)
      return images[img]
    }
  }
}
</script>
