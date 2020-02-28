<template lang="pug">
  .row
    .col-12.col-sm-6.col-md-4.q-px-md.q-my-md
      FieldCard
    .col-12.col-sm-6.col-md-4.q-px-md.q-my-md
      FieldCard
    .col-12.col-sm-6.col-md-4.q-px-md.q-my-md
      FieldCard
    .col-12.col-sm-6.col-md-4.q-px-md.q-my-md
      FieldCard

</template>

<script>
import FieldCard from 'components/Dashboard/Farmer/FieldCard'

export default {
  name:'FieldList',
  components:{
    FieldCard
  }
}
</script>
