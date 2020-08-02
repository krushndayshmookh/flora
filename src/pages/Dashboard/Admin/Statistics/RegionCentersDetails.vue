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
          v-model="selectedCenter"
          outlined
          label="Center"
          :options="centerOptions"
          map-options
        />
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <ChartDoughnut
              :chart-data="pieChartDataCollection"
              :options="{ ...chartOptionsBase, ...chartDoughnutOptions }"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-8">
        <q-card class="fit">
          <q-card-section>
            <div class="text-h6">{{ selectedCenter.label }}</div>
          </q-card-section>
          <q-card-section>
            <ChartHorizontalBar
              :chart-data="barChartDataCollection()"
              :options="{ ...chartOptionsBase, ...chartHorizontalBarOptions }"
              :styles="chartBarStyles"
            />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Crops</div>
          </q-card-section>
          <q-card-section class="q-pa-none">
            <q-list padding>
              <q-item
                v-for="crop in crops"
                :key="crop.value"
                v-ripple
                clickable
              >
                <q-item-section avatar>
                  {{ crop.label }}
                </q-item-section>

                <q-item-section>
                  <ChartHorizontalBar
                    :chart-data="barChartDataCollection()"
                    :options="{
                      ...chartOptionsBase,
                      ...chartHorizontalBarOptions
                    }"
                    :styles="chartBarStyles"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ChartDoughnut from 'components/Admin/Statistics/Chart/Doughnut'
import ChartHorizontalBar from 'components/Admin/Statistics/Chart/HorizontalBar'

export default {
  name: 'PageStatisticsRegionCrops',

  components: {
    ChartDoughnut,
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

      selectedCenter: {
        value: 0,
        label: 'Center 1'
      },
      centerOptions: [
        {
          value: 0,
          label: 'Center 1'
        },
        {
          value: 1,
          label: 'Center 2'
        },
        {
          value: 2,
          label: 'Center 3'
        },
        {
          value: 3,
          label: 'Center 4'
        }
      ],

      crops: [
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

      chartBarStyles: {
        height: '100px',
        width: '100%',
        position: 'relative'
      },

      chartOptionsBase: {
        responsive: true
      },

      chartDoughnutOptions: {},

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

      pieChartDataCollection: {},

      // barChartDataCollection: {
      //   labels: ['Capacity'],
      //   datasets: [
      //     {
      //       data: [this.getRandomInt()],
      //       backgroundColor: 'green',
      //       label: 'Filled'
      //     },
      //     {
      //       data: [this.getRandomInt()],
      //       backgroundColor: 'grey',
      //       label: 'Empty'
      //     }
      //   ]
      // },

      farmers: [
        {
          _id: 0,
          name: 'Vithika Jha',
          quantity: this.getRandomInt()
        },
        {
          _id: 1,
          name: 'Krushn Dayshmookh',
          quantity: this.getRandomInt()
        },
        {
          _id: 2,
          name: 'Krishnandu Baidya',
          quantity: this.getRandomInt()
        }
      ]
    }
  },

  watch: {
    selectedRegion() {
      this.randomize()
    },

    selectedCenter() {
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
      this.pieChartDataCollection = {
        labels: [...this.crops.map(c => c.label), 'Empty'],
        datasets: [
          {
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ],
            backgroundColor: ['brown', 'yellow', 'green', 'pink', 'grey'],
            label: this.selectedCenter.label
          }
        ]
      }
    },

    randomize() {
      this.generateRandomDataset()
    },

    barChartDataCollection() {
      return {
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
  }
}
</script>
