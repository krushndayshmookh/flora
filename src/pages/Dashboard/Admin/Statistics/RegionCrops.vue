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
    </div>
    <div class="row q-col-gutter-md">
      <div
        v-for="crop in crops"
        :key="crop._id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card>
          <q-card-section>
            <ChartDoughnut
              :chart-data="generateRandomDataset(crop.name)"
              :options="{ ...chartOptionsBase, ...chartDoughnutOptions }"
            />
          </q-card-section>
          <q-card-section>
            <div class="text-h6">{{ crop.name }}</div>
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

      crops: [
        {
          _id: 0,
          name: 'Wheat'
        },
        {
          _id: 1,
          name: 'Rice'
        },
        {
          _id: 2,
          name: 'Corn'
        },
        {
          _id: 3,
          name: 'Potato'
        }
      ],

      chartOptionsBase: {
        responsive: true
      },

      chartDoughnutOptions: {},

      datacollection: {
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
            label: 'Wheat'
          }
        ]
      }
    }
  },

  watch:{
    selectedRegion(){
      this.randomize()
    }
  },

  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 1
    },

    generateRandomDataset(label) {
      return {
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
            label
          }
        ]
      }
    },

    randomize() {
      for (let i = this.crops.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [this.crops[i], this.crops[j]] = [this.crops[j], this.crops[i]]
      }
    }
  }
}
</script>
