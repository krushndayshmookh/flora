<template>
  <q-page>
    <div class="text-h5 q-pa-md">Farmers List</div>
    
    <q-list>
      <q-item
        v-for="farmer in farmers"
        :key="farmer._id"
        v-ripple
        :to="'/admin/farmers/' + farmer._id + '/profile'"
        clickable
      >
       <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card"  bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Indian (Maharshtra Region)</div>
              <div class="text-h5 q-mt-sm q-pa-xs">
               {{farmer.name}}
              </div>
              <div class="text-caption text-grey">
               Land : {{farmer.land_area}} Acers
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageNotifications',

  data() {
    return {
      farmers: []
    }
  },

  mounted() {
    this.fetchFarmers()
  },

  methods: {
    fetchFarmers() {
      this.$q.loading.show()
      this.$axios
        .get(process.env.API + '/users?roles=farmer')
        .then(response => {
          if (response.data.success) this.farmers = response.data.data

          this.farmers.forEach(farmer=>{
            farmer.land_area = 9
          })
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
