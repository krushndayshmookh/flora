<template lang="pug">
  q-card
    q-img(:src="field.image || setImage()" style="height: 150px;")

    q-card-section
      .text-h6 {{ field.title }}
      .text-subtitle2(v-if="field.currentlyOccupied") {{ field.crop.plant.name || 'Unoccupied' }}
      .text-subtitle2(v-else) Unoccupied
    q-card-actions
      q-btn.full-width(v-ripple outline  :to="'/farmer/field/' + field.id") View
</template>

<script>
export default {
  name: 'FieldCard',
  props: {
    field: {
      type: Object,
      default: () => ({
        id: 0,
        image: '',
        title: '',
        crop: ''
      })
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
