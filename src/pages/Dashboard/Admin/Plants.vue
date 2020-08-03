<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Plants</div>

    <div class="row q-col-gutter-md">
      <div class="col-6 col-sm-4 col-md-3">
        <q-btn
          outline
          color="primary"
          class="fit"
          icon="add"
          label="Add Plant"
          @click="showPlantDialog"
        />
        >
      </div>

      <div
        v-for="plant in plants"
        :key="plant._id"
        class="col-6 col-sm-4 col-md-3"
      >
        <PlantCard :plant="plant" />
      </div>
    </div>

    <q-dialog v-model="plantDialog" position="bottom">
      <PlantForm @done="handleDone" />
    </q-dialog>
  </q-page>
</template>

<script>
import PlantCard from 'components/Admin/Plant/PlantCard'
import PlantForm from 'components/Admin/Plant/PlantForm'

export default {
  components: {
    PlantCard,
    PlantForm
  },

  data() {
    return {
      plantDialog: false,

      plants: [
        {
          _id: 0,
          name: 'Plant Name',
          timeToHarvest: '120',
          region: {
            name: 'Nagpur'
          },
          stages: [
            {
              _id: 0,
              title: 'Stage title',
              description: 'Stage description'
            },
            {
              _id: 1,
              title: 'Stage title',
              description: 'Stage description'
            }
          ]
        }
      ]
    }
  },

  mounted() {
    this.fetchPlants()
  },

  methods: {
    showPlantDialog() {
      this.plantDialog = true
    },

    hidePlantDialog() {
      this.plantDialog = false
    },

    handleDone() {
      this.hidePlantDialog()
      this.fetchPlants()
    },

    fetchPlants() {
      this.$axios.get(process.env.API + '/plants').then(response => {
        this.plants = response.data
      })
    }
  }
}
</script>
