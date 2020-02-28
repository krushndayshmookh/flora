<template lang="pug">
  q-page.q-pa-md
    .row
      h4.text-weight-light.q-px-md.q-my-sm Fields
    FieldList

</template>

<script>
import FieldList from 'components/Dashboard/Farmer/FieldList'

export default {
  name: 'DashboardFarmer',
  components: {
    FieldList
  }
}
</script>
