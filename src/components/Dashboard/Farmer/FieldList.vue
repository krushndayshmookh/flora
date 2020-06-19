<template lang="pug">
  .row
    .col-12.col-sm-6.col-md-4.q-px-md.q-my-md(v-for="field in fields" :key="field.id")
      FieldCard(:field="field")

</template>

<script>
import FieldCard from 'components/Dashboard/Farmer/FieldCard'

export default {
  name:'FieldList',
  props:['fields'],
  components:{
    FieldCard
  }
}
</script>
