<template>
  <q-page padding>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-6">
        <q-select
          v-model="selectedRegion"
          outlined
          label="Region"
          :options="regionOptions"
          map-options
          emit-value
        />
      </div>
      <div class="col-12 col-md-6">
        <q-select
          v-model="selectedCrop"
          outlined
          label="Region"
          :options="cropOptions"
          map-options
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <ChartDoughnut
              :chart-data="datacollection"
              :options="{ ...chartOptionsBase, ...chartDoughnutOptions }"
            />
          </q-card-section>
          <q-card-section>
            <div class="text-h6">{{ selectedCrop.label }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ChartDoughnut from 'components/Admin/Statistics/Chart/Doughnut'

export default {
  name: 'PageStatisticsRegionCrops',

  components: {
    ChartDoughnut
  },

  data() {
    return {
      selectedRegion: 0,
      regionOptions: [
        {
          value: 0,
          label: 'Nagpur'
        },
        {
          value: 1,
          label: 'Mumbai'
        },
        {
          value: 2,
          label: 'Pune'
        },
        {
          value: 3,
          label: 'Delhi'
        }
      ],

      selectedCrop: {
        value: 0,
        label: 'Wheat'
      },
      cropOptions: [
        {
          value: 0,
          label: 'Wheat'
        },
        {
          value: 1,
          label: 'Rice'
        },
        {
          value: 2,
          label: 'Corn'
        },
        {
          value: 3,
          label: 'Potato'
        }
      ],

      chartOptionsBase: {
        responsive: true
      },

      chartDoughnutOptions: {},

      datacollection: {}
    }
  },

  watch: {
    selectedRegion() {
      this.randomize()
    },

    selectedCrop() {
      this.randomize()
    }
  },

  mounted() {
    this.generateRandomDataset()
  },

  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 1
    },

    generateRandomDataset() {
      this.datacollection = {
        labels: ['Planted', 'Harvested', 'Collected', 'Needed'],
        datasets: [
          {
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ],
            backgroundColor: ['brown', 'yellow', 'green', 'grey'],
            label: this.selectedCrop.label
          }
        ]
      }
    },

    randomize() {
      this.generateRandomDataset()
    }
  }
}
</script>
