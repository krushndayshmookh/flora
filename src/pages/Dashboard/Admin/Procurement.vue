<template>
  <q-page padding>
    <div class="text-h6 q-my-md">Procurement</div>
    <div class="row q-col-gutter-md q-pa-md">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pa-md">
              <q-btn
                class="fit q-pa-md"
                color="primary"
                to="/admin/procurement/new/notice"
                stack
                icon="add"
                size="lg"
              >
                Create Prodcurement Plan
              </q-btn>
            </q-card-section>

            <q-card-section class="col-6 flex flex-end ">
              <q-img class="rounded-borders" src="images/incentive-2.jpg" />
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pa-md">
              <q-btn
                class="fit q-pa-md"
                color="secondary"
                stack
                icon="notifications"
                size="lg"
                to="/admin/procurement/new/plan"
              >
                Issue Prodcurement Notice
              </q-btn>
            </q-card-section>

            <q-card-section class="col-6 flex flex-end ">
              <q-img class="rounded-borders" src="images/incentive-2.jpg" />
            </q-card-section>
          </q-card-section>
        </q-card>
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
