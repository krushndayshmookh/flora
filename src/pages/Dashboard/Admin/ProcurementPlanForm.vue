<template>
  <q-page>
    <div class="text-h6 q-pa-md">Procurement Form</div>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <q-form class="q-gutter-md">
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
              <q-list>
                <q-item v-ripple tag="label">
                  <q-item-section avatar>
                    <q-radio v-model="user.color" val="orange" color="orange" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Trader</q-item-label>
                    <q-item-label caption
                      >Can be used by traders for the bit of
                      production.</q-item-label
                    >
                  </q-item-section> </q-item
                ><q-item v-ripple tag="label">
                  <q-item-section avatar top>
                    <q-radio v-model="user.color" val="cyan" color="cyan" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Procurement Center</q-item-label>
                    <q-item-label caption
                      >Can be used by admin for the buying of
                      production.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
              <q-select
                v-model="user.type"
                filled
                label="Procurements Center"
                map-options
                emit-value
                :options="ProcurementsCenters"
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="home" />
                </template>
              </q-select>
              <!-- <q-input v-model="user.phone" color="blue" filled label="Phone">
                <template v-slot:prepend>
                  <q-icon name="call" />
                </template>
              </q-input>

              <q-input v-model="user.aadhar" color="blue" filled label="Aadhar">
                <template v-slot:prepend>
                  <q-icon name="payment" />
                </template>
              </q-input> -->

              <q-input
                v-model="user.address"
                color="blue"
                filled
                label="Address"
              >
                <template v-slot:prepend>
                  <q-icon name="map" />
                </template>
              </q-input>
              <div>
                <q-btn label="Submit " type="submit" color="secondary" />
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
                Overview
              </div>
              <div class="text-caption text-grey">
                Farmer | 8 Year Exprience |
              </div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <div class="text-caption q-pa-md text-justify">
            The Flora App provides many opportunities for suppliers, contractors
            and consultants worldwide. Most of these procurement opportunities
            are related to Flora App-financed projects in our regions. But there
            are also a limited number of opportunities to tender for contracts
            involving internal Flora App projects and departments. We offer open
            and fair competition in all our procurement activities. The Flora
            App has developed mechanisms to ensure that the highest level of
            integrity is respected in all of its activities, including
            Procurement.
          </div>
        </q-card>
        <q-separator />
        <q-card class="my-card q-pa-md " flat bordered style="margin-top:10px">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Indian (Maharshtra Region)</div>

              <q-separator />
              <div class="text-caption text-grey q-pa-md">
                You Can select the Procurements Center List of Goverment.
              </div>
            </q-card-section>

            <q-card-section class="col-6 flex flex-end ">
              <q-img class="rounded-borders" src="images/bg_card_login.jpg" />
            </q-card-section>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <div class="text-caption q-pa-md text-justify">
              <q-select
                v-model="user.centers"
                filled
                label="Centers"
                map-options
                emit-value
                :options="ProcurementsCenters"
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="home" />
                </template>
              </q-select>
            </div>
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
