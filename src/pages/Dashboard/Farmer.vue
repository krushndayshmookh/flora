<template lang="pug">
  q-page.q-pa-md
    .row
      h4.text-weight-light.q-px-md.q-my-sm Fields
    FieldList(:fields="fields")

</template>

<script>
import FieldList from 'components/Dashboard/Farmer/FieldList'

export default {
  name: 'DashboardFarmer',
  components: {
    FieldList
  },
  data() {
    return {
      fields: [
        {
          id: 0,
          image: 'https://cdn.quasar.dev/img/parallax1.jpg',
          title: 'Field 0',
          crop: 'Field 0'
        },
        {
          id: 1,
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          title: 'Field 1',
          crop: 'Field 1'
        },
        {
          id: 2,
          image: 'https://cdn.quasar.dev/img/parallax1.jpg',
          title: 'Field 2',
          crop: 'Field 2'
        },
        {
          id: 3,
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          title: 'Field 2',
          crop: 'Field 2'
        },
        {
          id: 4,
          image: 'https://cdn.quasar.dev/img/parallax1.jpg',
          title: 'Field 4',
          crop: 'Field 4'
        }
      ]
    }
  }
}
</script>
