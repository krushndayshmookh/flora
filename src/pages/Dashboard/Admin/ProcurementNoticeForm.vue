<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">New Procurement Notice</div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-select
            v-model="user.farmer"
            filled
            label="Select Farmer"
            map-options
            emit-value
            :options="ProcurementsSelectFarmer"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-select>

          <q-select
            v-model="user.crop"
            filled
            label="Select Crop"
            map-options
            emit-value
            :options="ProcurementsSelectCrop"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="eco" />
            </template>
          </q-select>

          <q-input
            v-model="notice.quantity"
            filled
            label="Enter Quantity"
            type="number"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="looks_3" />
            </template>
          </q-input>

          <q-input
            v-model="notice.body"
            filled
            label="Enter Description"
            type="textarea"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon name="subject" />
            </template>
          </q-input>

          <div>
            <q-btn label="Submit " type="submit" color="secondary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {
        color: 'cyan',

        crop: 'Wheat',
        farmer: '1',
        email: 'k******@****.com',
        phone: '76******52',
        aadhar: '*********123',
        exprience: '6',
        address: 'Nagpur'
      },
      notice: {
        quantity: null,
        body: null
      },
      ProcurementsSelectCrop: [
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
      ProcurementsSelectFarmer: [
        {
          value: '1',
          label: 'Kishor'
        },
        {
          value: '2',
          label: 'Krushn'
        },
        {
          value: '3',
          label: 'Vithika'
        },
        {
          value: '4',
          label: 'Anuprita'
        },
        {
          value: '5',
          label: 'Kirti'
        },
        {
          value: '6',
          label: 'Kaustubh'
        }
      ]
    }
  }
}
</script>

<style></style>
