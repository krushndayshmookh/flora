<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Field Details</div>
    </q-card-section>

    <q-card-section class="column q-col-gutter-md q-py-none">
      <q-input
        v-model="normalizedField.title"
        outlined
        color="teal"
        label="Title"
        type="text"
        class="col"
      />

      <q-input
        v-model="normalizedField.area"
        outlined
        color="teal"
        label="Area"
        type="number"
        class="col"
        suffix="Acres"
      />

      <q-select
        v-model="normalizedField.crop"
        outlined
        :options="cropOptions"
        label="Crop"
        class="col"
        map-options
        emit-value
      >
      </q-select>
    </q-card-section>

    <q-card-actions class="q-pa-md" align="right">
      <q-btn color="primary" @click="saveField">Save</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'FieldEditDialog',

  props: {
    field: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      normalizedField: null,

      cropOptions: [
        {
          value: 'rice',
          label: 'Rice'
        },
        {
          value: 'wheat',
          label: 'Wheat'
        },
        {
          value: 'corn',
          label: 'Corn'
        },
        {
          value: 'cotton',
          label: 'Cotton'
        },
        {
          value: 'sugarcane',
          label: 'Sugacane'
        }
      ]
    }
  },

  mounted() {
    this.normalizeField()
  },

  methods: {
    normalizeField() {
      this.normalizedField = { ...this.normalizedField, ...this.field }
    },

    saveField() {
      this.$q.loading.show()
      this.$axios
        .post('', this.normalizedField)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.$q.loading.hide()
          this.$emit('done')
        })
    }
  }
}
</script>
