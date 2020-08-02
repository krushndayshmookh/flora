<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Plant a Crop</div>
    </q-card-section>

    <q-card-section class="column q-col-gutter-md q-py-none">
      <q-select
        v-model="normalizedCrop.name"
        outlined
        color="teal"
        :options="cropOptions"
        label="Crop"
        class="col"
        map-options
        emit-value
      />

      <q-input
        v-model="normalizedCrop.datePlanted"
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
                v-model="normalizedCrop.datePlanted"
                @input="() => $refs.qDateProxy.hide()"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>

    <q-card-actions class="q-pa-md" align="right">
      <q-btn color="primary" @click="saveCrop">Save</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'CropPlantDialog',

  props: {
    crop: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      normalizedCrop: {
        crop: null,
        datePlanted: new Date()
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
    this.normalizeCrop()
  },

  methods: {
    normalizeCrop() {
      this.normalizedCrop = { ...this.normalizedCrop, ...this.crop}
    },

    saveCrop() {
      this.$q.loading.show()
      this.$axios
        .put(process.env.API + '/fields', this.normalizedCrop)
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
