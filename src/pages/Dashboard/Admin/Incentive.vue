<template>
  <q-page padding>
    <div class="text-h6 q-my-md">Incentives</div>
<div class="row q-col-gutter-md q-pa-md">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pa-md">
              <q-btn
                class="fit q-pa-md"
                color="primary"
                
                stack
                icon="add"
                size="lg"
                to="/admin/incentive/new/plan"
              >
                Create New Incentive
              </q-btn>
            </q-card-section>

            <q-card-section class="col-6 flex flex-end ">
              <q-img
                class="rounded-borders"
                src="images/incentive-2.jpg"
              />
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
                to="/admin/incentive/new/notice"
              >
                 Incentive Details Overview
              </q-btn>
            </q-card-section>

            <q-card-section class="col-6 flex flex-end ">
              <q-img
                class="rounded-borders"
                src="images/incentive-2.jpg"
              />
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
        first_name: 'Krish',
        last_name: 'Baidya',
        age: 24,
        email: 'k******@****.com',
        phone: '76******52',
        aadhar: '*********123',
        exprience: '6',
        address: 'Nagpur'
      }
    }
  }
}
</script>

<style scoped></style>
