<template>
  <q-page padding>
    <div class="q-col-gutter-md">
      <div class="col">
        <q-card>
          <q-img
            src="https://www.letsnurture.com/wp-content/uploads/2019/01/Smart-farming-LetsNurture.jpg"
            basic
          >
            <div class="absolute-bottom text-h6 text-center">
              Fertilizer Calculator
            </div>
          </q-img>
        </q-card>

        <q-card class="my-card">
          <q-card-section>
            Select the Type of Crop
            <q-select
              v-model="selectedCrop"
              outlined
              :options="cropOptions"
              label="Crop"
              map-options
            />
          </q-card-section>

          <q-card-section>
            Enter the Area of Farmland
            <q-input
              v-model="SelectedArea"
              style="max-width:100%"
              outlined
              label="Area"
            />
          </q-card-section>

          <div class="q-pa-md">
            <q-markup-table flat bordered>
              <tbody>
                <tr>
                  <td>Crop</td>
                  <td class="text-right">{{ selectedCrop.label }}</td>
                </tr>
                <tr>
                  <td>Urea(N)</td>
                  <td class="text-right">{{ computed_n }} kg</td>
                </tr>
                <tr>
                  <td>Super Phosphate(P)</td>
                  <td class="text-right">{{ computed_p }} kg</td>
                </tr>
                <tr>
                  <td>Potash(K)</td>
                  <td class="text-right">{{ computed_k }} kg</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="text-right">
                    {{ computed_p + computed_k + computed_n }} kg
                  </td>
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

      selectedCrop: {
        label: 'Rice',
        value: 'rice'
      },
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
          label: 'Corn',
          value: 'corn'
        },
        {
          label: 'Potato',
          value: 'potato'
        }
      ]
    }
  },

  computed: {
    computed_n() {
      return this.multipliers[this.selectedCrop.value].n * this.SelectedArea
    },

    computed_p() {
      return this.multipliers[this.selectedCrop.value].p * this.SelectedArea
    },

    computed_k() {
      return this.multipliers[this.selectedCrop.value].k * this.SelectedArea
    }
  }
}
</script>
