<template lang="pug">
  q-page.q-pa-md

    h4.text-weight-light.q-px-md.q-my-sm Fields

    .q-px-md.q-my-md
      q-btn(v-ripple rounded color="primary" label="Add field" icon="add" @click="toggleDialog(true)")

    FieldList(:fields="fields")

    FieldAddDialog(v-model="fieldDialogOpen" @change="toggleDialog")

</template>

<script>
import FieldList from 'components/Dashboard/Farmer/FieldList'
import FieldAddDialog from 'components/Dashboard/Farmer/FieldAddDialog'

export default {
  name: 'DashboardFarmer',
  components: {
    FieldList,
    FieldAddDialog
  },
  data() {
    return {
      fieldDialogOpen: false,
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
  },
  methods: {
    toggleDialog(val) {
      this.fieldDialogOpen = val
    }
  }
}
</script>
