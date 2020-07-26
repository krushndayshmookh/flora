<template>
  <q-page padding>
    <div class="q-col-gutter-md">
      <div class="col">
        <q-card>
          <q-img
            src="https://www.letsnurture.com/wp-content/uploads/2019/01/Smart-farming-LetsNurture.jpg"
            basic
          >
            <div class="absolute-bottom text-h6 text-center">Fertilizer Calculator</div>
          </q-img>
        </q-card>

        <q-card class="my-card">
          <q-card-section>
            Select the Type of Crop
            <q-select
              outlined
              v-model="selectedCrop"
              :options="cropOptions"
              label="Crop"
              emit-value
              map-options
            />
          </q-card-section>

          <q-card-section>
            Enter the Area of Farmland
            <q-input style="max-width:100%" outlined v-model="SelectedArea" label="Area" />
          </q-card-section>

          <div class="q-pa-md">
            <q-markup-table  flat bordered>
              <thead>
                <tr>
                  <th class="text-left">Crop</th>
                  <th class="text-right">Urea(N)</th>
                  <th class="text-right">Super Phosphate(P)</th>
                  <th class="text-right">Potash(K)</th>
                  <th class="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">{{selectedCrop}}</td>
                  <td class="text-right">{{computed_n}}</td>
                  <td class="text-right">{{computed_p}}</td>
                  <td class="text-right">{{computed_k}}</td>
                  <td class="text-right">{{computed_p+computed_k+computed_n}}</td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>


<script>
export default {
  
  data() {
    return {
      multipliers: {
        rice: {
          n: 23,
          p: 8,
          k: 30
        },
        wheat: {
          n: 24,
          p: 9,
          k: 30
        },
         corn: {
          n: 25,
          p: 9,
          k: 35
        },
         potato: {
          n: 24,
          p: 10,
          k: 30
        }
      },

      selectedCrop:'rice',
      SelectedArea: 0,

      cropOptions: [
        {
          label: 'Rice',
          value: 'rice'
        },
        {
          label: 'Wheat',
          value: 'wheat'
        },
        {
          label: 'corn',
          value: 'corn'
        },
        {
          label: 'potato',
          value: 'potato'
        }
      ]
    }
  },

  computed: {
    computed_n() {
      return this.multipliers[this.selectedCrop].n * this.SelectedArea
    },

    computed_p() {
      return this.multipliers[this.selectedCrop].p * this.SelectedArea
    },

    computed_k() {
      return this.multipliers[this.selectedCrop].k * this.SelectedArea
    }
  },

 
}
</script>
