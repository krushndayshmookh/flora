<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Create new Plant</div>
    </q-card-section>

    <q-card-section class="column q-col-gutter-md q-py-none">
      <q-input
        v-model="plant.name"
        outlined
        color="teal"
        label="Name"
        class="col"
      />

      <q-input
        v-model="plant.timeToHarvest"
        outlined
        color="teal"
        label="Harvest Time"
        class="col"
        type="number"
        suffix="Days"
      />

      <q-select
        v-model="plant.region"
        outlined
        color="teal"
        label="Region"
        class="col"
        :options="regionOptions"
        map-options
        emit-value
      />

      <div v-for="(stage, idx) in plant.stages" :key="idx" class="col">
        <q-input
          v-model="stage.title"
          outlined
          color="teal"
          :label="'Title for Stage ' + (idx + 1)"
          class="q-mb-md"
          type="text"
        />
        <q-input
          v-model="stage.description"
          outlined
          color="teal"
          :placeholder="'Description for Stage ' + (idx + 1)"
          type="text"
        />
      </div>
    </q-card-section>

    <q-card-actions class="q-pa-md justify-between">
      <q-btn outline color="primary" @click="addStage">Add Stage</q-btn>
      <q-btn color="primary" @click="savePlant">Save</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'PlantDialog',

  // props: {
  //   crop: {
  //     type: Object,
  //     default: () => ({})
  //   }
  // },

  data() {
    return {
      plant: {
        name: null,
        timeToHarvest: null,
        region: null,
        stages: []
      },

      regionOptions: []
    }
  },

  mounted() {
    // this.normalizeCrop()
    this.fetchRegions()
  },

  methods: {
    // normalizeCrop() {
    //   this.plant = { ...this.plant, ...this.crop }
    // },

    savePlant() {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/plants', this.plant)
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
    },

    fetchRegions() {
      this.$axios.get(process.env.API + '/regions').then(response => {
        this.regionOptions = response.data.data.map(r => ({
          value: r._id,
          label: r.name
        }))
      })
    },

    addStage() {
      this.plant.stages.push({
        title: '',
        description: ''
      })
    }
  }
}
</script>
