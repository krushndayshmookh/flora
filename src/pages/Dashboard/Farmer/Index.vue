<template lang="pug">
  q-page(padding)

    FieldList(:fields="fields" @add="toggleDialog(true)")

    FieldAddDialog(v-model="fieldDialogOpen" @change="toggleDialog")

    q-page-sticky.btn(position="bottom-right" :offset="[18, 18]")
      q-btn(fab icon="add" color="primary" @click="toggleDialog(true)")

    q-page-sticky.btn(position="bottom-left" :offset="[18, 18]")
      q-btn(fab icon="report" color="negative" to="/farmer/report")

</template>

<script>
import FieldList from 'components/Farmer/FieldList'
import FieldAddDialog from 'components/Farmer/FieldAddDialog'

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
          image: 'images/banner-1.jpg',
          title: 'Wheat',
          crop: 'Field 0'
        },
        {
          id: 1,
         image: 'images/baner-3.png',
          title: 'Corn',
          crop: 'Field 1'
        },
        {
          id: 2,
          image: 'images/banner-2.jpg',
          title: 'Rice',
          crop: 'Field 2'
        },
        {
          id: 3,
         image: 'images/baner-3.png',
          title: 'Cotton',
          crop: 'Field 3'
        },
        {
          id: 4,
          image: 'images/banner-2.jpg',
          title: 'Dal',
          crop: 'Field 4'
        }
      ]
    }
  },
  methods: {
    toggleDialog(val) {
      this.fieldDialogOpen = val
    },

    reportProductionFail() {}
  }
}
</script>
