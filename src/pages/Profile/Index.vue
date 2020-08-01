<template>
  <q-page>
    <div class="text-h6 q-pa-md">My Profile</div>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                color="blue"
                filled
                v-model="user.first_name"
                label="First Name"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input
                color="blue"
                filled
                v-model="user.last_name"
                label="Last Name"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <q-input color="blue" filled v-model="user.age" label="Age">
                <template v-slot:prepend>
                  <q-icon name="eco" />
                </template>
              </q-input>
              <q-input color="blue" filled v-model="user.email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input color="blue" filled v-model="user.phone" label="Phone">
                <template v-slot:prepend>
                  <q-icon name="call" />
                </template>
              </q-input>

              <q-input color="blue" filled v-model="user.aadhar" label="Aadhar">
                <template v-slot:prepend>
                  <q-icon name="payment" />
                </template>
              </q-input>

              <q-input
                color="blue"
                filled
                v-model="user.exprience"
                label="Farm Exprience"
              >
                <template v-slot:prepend>
                  <q-icon name="work" />
                </template>
              </q-input>

              <q-input
                color="blue"
                filled
                v-model="user.address"
                label="Address"
              >
                <template v-slot:prepend>
                  <q-icon name="map" />
                </template>
              </q-input>

              <div>
                <q-btn label="Update" type="submit" color="secondary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Indian (Maharshtra Region)</div>
              <div class="text-h5 q-mt-sm q-pa-xs">
                {{ user.first_name }} {{ user.last_name }}
              </div>
              <div class="text-caption text-grey">
                Farmer | 8 Year Exprience |
              </div>
            </q-card-section>

            <q-card-section class="col-6 flex flex-end ">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
          </q-card-section>

          <q-card-section> </q-card-section>
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
        age: 30,
        email: 'm******@****.com',
        phone: '98******23',
        aadhar: '*********123',
        exprience: '6',
        address: 'Nagpur'
      }
    }
  }
}
</script>

<style scoped></style>
