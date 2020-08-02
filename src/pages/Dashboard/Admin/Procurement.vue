<template>
  <q-page padding>
    <div class="text-h4 q-my-md">Procurement</div>

    <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-btn
          class="fit q-pa-md"
          color="primary"
          outline
          stack
          icon="notifications"
          size="lg"
          to="/admin/procurement/new/notice"
        >
          Issue Prodcurement Notice
        </q-btn>
      </div>

      <div class="col-6">
        <q-btn
          class="fit q-pa-md"
          color="secondary"
          outline
          stack
          icon="eco"
          size="lg"
          to="/admin/procurement/new/plan"
        >
          Create Prodcurement Plan
        </q-btn>
      </div>
    </div>
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
      ProcurementsCenters: [
        {
          value: '1',
          label: 'Nagpur Sub Division'
        },
        {
          value: '2',
          label: 'Chandrapur Sub Division'
        },
        {
          value: '3',
          label: 'Amravati Sub Division'
        },
        {
          value: '4',
          label: 'Akola Sub Division'
        },
        {
          value: '5',
          label: 'Gadchiroli Sub Division'
        },
        {
          value: '6',
          label: 'Latur Sub Division'
        }
      ],
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
