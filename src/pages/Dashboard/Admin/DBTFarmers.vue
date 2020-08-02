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
        <q-item-section>
          <div class="text-h5">
            {{ farmer.name }}
          </div>
          <div class="text-caption">Land : {{ farmer.land_area }} Acres</div>
        </q-item-section>
        <q-item-section>
          <div class="text-overline">Indian (Maharshtra Region)</div>
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-avatar>
        </q-item-section>
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

          this.farmers.forEach(farmer => {
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
