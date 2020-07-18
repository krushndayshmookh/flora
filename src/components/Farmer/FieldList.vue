<template lang="pug">

  .row.q-col-gutter-md
    .col-12.col-sm-6.col-md-4
      q-btn.fit.add-btn(outline size="lg" icon="add" @click="$emit('add')" label="Add Field" color="primary")
    .col-12.col-sm-6.col-md-4(v-for="field in fields" :key="field.id")
      FieldCard(:field="field")

</template>

<script>
import FieldCard from 'components/Farmer/FieldCard'

export default {
  name:'FieldList',
  props:['fields'],
  components:{
    FieldCard
  }
}
</script>

<style lang="scss" scoped>
.add-btn {
  min-height: 175px;
}
</style>