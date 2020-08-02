<template>
  <q-page>
    <div class="text-h6 q-pa-md">Create New Incentive</div>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <q-form class="q-gutter-md q-pa-sm">
              <q-select
                v-model="user.crop"
                filled
                label="Select Crop"
                map-options
                emit-value
                :options="IncentiveSelectCrop"
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="eco" />
                </template>
              </q-select>

              <q-select
                v-model="user.region"
                filled
                label="Select Region"
                map-options
                emit-value
                :options="IncentiveRegion"
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="map" />
                </template>
              </q-select>

              <q-input
                v-model="user.title"
                filled
                label="Title"
                type="text"
                class="q-mb-md"
              >
                <template v-slot:prepend>
                  <q-icon name="info" />
                </template>
              </q-input>

              <q-input v-model="text" filled type="textarea">
                <template v-slot:prepend>
                  <q-icon name="tag" />
                </template>
              </q-input>

              <div>
                <q-btn  label="Send " type="submit" color="secondary" />
              </div>
            </q-form>
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

      IncentiveSelectCrop: [
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
      IncentiveRegion: [
        {
          value: 'nagpur',
          label: 'Nagpur'
        },
        {
          value: 'pune',
          label: 'Pune'
        },
        {
          value: 'amravati',
          label: 'Amravati'
        },
        {
          value: 'chandrapur',
          label: 'Chandrapur'
        },
        {
          value: 'akola',
          label: 'Akola'
        }
      ]
    }
  }
}
</script>

<style></style>
