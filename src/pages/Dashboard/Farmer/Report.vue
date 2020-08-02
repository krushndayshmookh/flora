<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            v-model="report.first_name"
            color="blue"
            filled
            label="First Name"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="report.last_name"
            color="blue"
            filled
            label="Last Name"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input v-model="report.phone" color="blue" filled label="Phone">
            <template v-slot:prepend>
              <q-icon name="call" />
            </template>
          </q-input>

          <q-input v-model="report.aadhar" color="blue" filled label="Aadhar">
            <template v-slot:prepend>
              <q-icon name="payment" />
            </template>
          </q-input>

          <q-input v-model="report.address" color="blue" filled label="Address">
            <template v-slot:prepend>
              <q-icon name="map" />
            </template>
          </q-input>

          <q-select
            v-model="report.field"
            filled
            label="Select Field"
            map-options
            emit-value
            :options="ReportSelectField"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="eco" />
            </template>
          </q-select>
          <q-select
            v-model="report.crop"
            filled
            label="Select Crop"
            map-options
            emit-value
            :options="ReportSelectCrop"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="eco" />
            </template>
          </q-select>

          <q-select
            v-model="report.failure"
            filled
            label="Reason For Failure"
            map-options
            emit-value
            :options="ReportSelectFailure"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="warning" />
            </template>
          </q-select>

          <q-input v-model="report.date" color="blue" filled label="Report Date">
            <template v-slot:prepend>
              <q-icon name="report" />
            </template>
          </q-input>
        </q-form>
      </q-card-section>
    </q-card>

    <q-btn
      class="full-width fixed-bottom"
      color="primary"
      size="lg"
      label="Send"
      @click="sendReport"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageReport',
  data() {
    return {
      report: {
        first_name: null,
        last_name: null,
        phone: null,
        aadhar: null,
        description: null,
        address: null,
        field: null,
        crop: null,
        failure: null,
        date: null,
      },
      ReportSelectCrop: [
        {
          value: 'Wheat',
          label: 'Wheat'
        },
        {
          value: 'corn',
          label: 'Corn'
        },
        {
          value: 'rice',
          label: 'Rice'
        },
        {
          value: 'dal',
          label: 'Dal'
        },
        {
          value: 'cotton',
          label: 'Cotton'
        },
        {
          value: 'onions',
          label: 'Onions'
        }
      ],
      ReportSelectFailure: [
        {
          value: 'rainfall',
          label: 'Rainfall'
        },
        {
          value: 'natural_disaster',
          label: 'Natural Disaster'
        },
        {
          value: 'wrong_fertilizer',
          label: 'Wrong Fertilizer'
        },
        {
          value: 'others',
          label: 'Others'
        }
      ],
      ReportSelectField: [
        {
          value: '1',
          label: 'Field 1'
        },
        {
          value: '2',
          label: 'Field 2'
        },
        {
          value: '3',
          label: 'Field 3'
        }
      ]
    }
  },

  methods: {
    sendReport() {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/reports', this.report)
        .then(response => {
          console.log(response.data)
          this.$q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted!'
          })
          this.$router.back()
        })
        .catch(err => {
          console.error(err)
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            icon: 'error',
            message: 'Error!'
          })
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
