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
      <div v-for="center in centers" :key="center._id" class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ center.name }}</div>
          </q-card-section>
          <q-card-section>
            <ChartHorizontalBar
              :chart-data="generateRandomDataset(center.name)"
              :options="{ ...chartOptionsBase, ...chartHorizontalBarOptions }"
              :styles="chartBarStyles"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ChartHorizontalBar from 'components/Admin/Statistics/Chart/HorizontalBar'

export default {
  name: 'PageStatisticsRegionCrops',

  components: {
    ChartHorizontalBar
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

      centers: [
        {
          _id: 0,
          name: 'Center 1'
        },
        {
          _id: 1,
          name: 'Center 2'
        },
        {
          _id: 2,
          name: 'Center 3'
        },
        {
          _id: 3,
          name: 'Center 4'
        }
      ],

      chartBarStyles: {
        height: '100px',
        width: '100%',
        position: 'relative'
      },

      chartOptionsBase: {
        responsive: true
      },

      chartHorizontalBarOptions: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true,
              gridlines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridlines: {
                display: false
              }
            }
          ]
        }
      },

      datacollection: {
        labels: ['Capacity'],
        datasets: [
          {
            data: [this.getRandomInt()],
            backgroundColor: 'green',
            label: 'Filled'
          },
          {
            data: [this.getRandomInt()],
            backgroundColor: 'grey',
            label: 'Empty'
          }
        ]
      }
    }
  },

  watch: {
    selectedRegion() {
      this.randomize()
    }
  },

  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 1
    },

    generateRandomDataset(label) {
      const empty = this.getRandomInt()
      const filled = 100 - empty
      return {
        labels: ['Capacity'],
        datasets: [
          {
            data: [filled],
            backgroundColor: 'green',
            label: 'Filled'
          },
          {
            data: [empty],
            backgroundColor: 'grey',
            label: 'Empty'
          }
        ]
      }
    },

    randomize() {
      for (let i = this.crops.length - 1; i > 0; i--) {
        const j = (Math.floor(Math.random() * (i + 1))[
          (this.crops[i], this.crops[j])
        ] = [this.crops[j], this.crops[i]])
      }
    }
  }
}
</script>
