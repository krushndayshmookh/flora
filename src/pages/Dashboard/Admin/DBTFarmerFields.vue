<template lang="pug">
  q-page(padding)
    FieldList(:fields="fields")

</template>

<script>
import FieldList from 'components/Farmer/FieldList'

export default {
  components: {
    FieldList
  },

  data() {
    return {
      farmer: this.$route.params.id,
      fields: [
        {
          _id: 0
        }
      ]
    }
  },
  mounted() {
    this.fetchFields()
  },

  methods: {
    fetchFields() {
      this.$axios
        .get(process.env.API + '/fields?role=admin&farmer=' + this.farmer)
        .then(response => {
          this.fields = response.data.data
        })
    }
  }
}
</script>
