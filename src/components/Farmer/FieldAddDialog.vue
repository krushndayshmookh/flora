<template lang="pug">
q-dialog(v-model="show" position="bottom")
  q-card
    q-card-section
      .text-h6 Field Details
    q-card-section.q-py-none
      .q-col-gutter-sm.column
        q-input(outlined color="teal" v-model="field.title" placeholder="Title" class="col" type="text" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
          template(v-slot:prepend)
            q-icon(name="local_offer")
        q-input(outlined color="teal" v-model="field.area" placeholder="Area" class="col" type="number" suffix="Acres" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
          template(v-slot:prepend)
            q-icon(name="open_with")
        q-select(v-model="field.region" outlined color="teal" :options="regionOptions" label="Region" lass="col" map-options emit-value)
        //- q-input(outlined color="teal" v-model="field.crop" placeholder="Crop" class="col" type="text" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
          template(v-slot:prepend)
            q-icon(name="eco")
    q-card-actions.q-pa-md(align="right")
      q-btn(label="Save" @click="onSubmit" color="primary")

</template>

<script>
export default {
  name: 'FieldAddDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      field: {
        title: null,
        area: null,
        crop: null,
        region: null
      },

      regions: [],
      regionOptions: []
    }
  },

  computed: {
    show: {
      get() {
        return this.value
      },
      set(opened) {
        this.$emit('change', opened)
      }
    }
  },

  mounted() {
    this.fetchRegions()
  },

  methods: {
    onSubmit() {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/fields', this.field)
        .then(response => {
          console.log(response.data)
          this.$q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Created!'
          })
          this.show = false
          this.$emit('done')
        })
        .catch(err => {
          console.error(err)
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            icon: 'error',
            message: 'Error!'
          })
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    },

    fetchRegions() {
      this.$axios
        .get(process.env.API + '/regions')
        .then(response => {
          this.regions = response.data.data
          this.regionOptions = this.regions.map(r => ({
            value: r._id,
            label: r.name
          }))
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>
