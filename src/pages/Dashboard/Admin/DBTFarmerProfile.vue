<template>
  <q-page padding>
    <div class="column q-col-gutter-md">
      <div class="col">
        <q-card>
          <q-card-section horizontal class="items-center">
            <q-card-section>
              <q-avatar size="48px" round>
                <q-img :src="farmer.image"></q-img>
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="text-h5">{{ farmer.name }}</div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-list padding>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="location_on" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.address }}</q-item-section>
                <q-item-section side>Address</q-item-section>
              </q-item>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="phone" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.phone }}</q-item-section>
                <q-item-section side>Phone</q-item-section>
              </q-item>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="alternate_email" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.email }}</q-item-section>
                <q-item-section side>Email</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card>
          <q-card-section>
            <div class="text-h6">Identity</div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-list padding>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="fingerprint" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.aadhar }}</q-item-section>
                <q-item-section side>AADHAR</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card>
          <q-card-section>
            <div class="text-h6">Farm</div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-list padding>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="agriculture" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>
                  {{ farmer.farm.totalArea }} Acres
                </q-item-section>
                <q-item-section side>Land</q-item-section>
              </q-item>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="grid_on" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.farm.fields }}</q-item-section>
                <q-item-section side>Fields</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn
              flat
              :to="'/admin/farmers/' + farmer._id + '/fields'"
              color="primary"
              icon-right="chevron_right"
            >
              Details
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col">
        <q-card>
          <q-card-section>
            <div class="text-h6">Bank</div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-list padding>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="account_balance" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.bank.name }}</q-item-section>
                <q-item-section side>Bank</q-item-section>
              </q-item>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="assignment_ind" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.bank.account }}</q-item-section>
                <q-item-section side>Account</q-item-section>
              </q-item>
              <q-item v-ripple clickable>
                <q-item-section avatar>
                  <q-icon name="near_me" color="primary"></q-icon>
                </q-item-section>
                <q-item-section>{{ farmer.bank.ifsc }}</q-item-section>
                <q-item-section side>IFSC</q-item-section>
              </q-item>
            </q-list>
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
      farmer: {
        _id: this.$route.params.id,
        name: 'Vithika Jha',
        image: 'https://cdn.quasar.dev/img/boy-avatar.png',
        phone: '+91 98233 56409',
        email: 'vithika@jha.com',
        aadhar: '7559 4557 8362',
        bank: {
          name: 'State Bank of India',
          account: '33200675110',
          ifsc: 'SBIN0007359'
        },
        address: '5km Stone, Pauni Bhandara Road, Wadegaon, Pauni 441910',
        farm: {
          totalArea: 50,
          fields: 4
        }
      }
    }
  }
}
</script>
