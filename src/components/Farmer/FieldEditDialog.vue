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

      <q-input
        v-model="normalizedField.location"
        outlined
        color="teal"
        label="Location"
        type="tesxt"
        class="col"
      />
      <!-- 
      <q-select
        v-model="normalizedField.crop"
        outlined
        color="teal"
        :options="cropOptions"
        label="Crop"
        class="col"
        map-options
        emit-value
      /> -->

      <!-- <q-input
        v-model="normalizedField.datePlanted"
        outlined
        color="teal"
        mask="date"
        class="col"
        label="Date Planted"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="normalizedField.datePlanted"
                @input="() => $refs.qDateProxy.hide()"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>-->
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
      normalizedField: {
        title: null,
        area: null,
        crop: null,
        datePlanted: null
      },

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
        .put(process.env.API + '/fields', this.normalizedField)
        .then(response => {
          // if(response.data.success)
          console.log(response.data)
          this.$emit('done')
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
