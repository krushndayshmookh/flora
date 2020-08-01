<template>
  <q-page>
    <q-list>
      <q-item
        v-for="farmer in farmers"
        :key="farmer._id"
        v-ripple
        :to="'/admin/farmers/farmer/' + farmer._id"
        clickable
      >
        <q-item-section avatar>
          <q-avatar round>
            <q-img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <div class="text-body1">{{ farmer.name }}</div>
          <div class="text-caption">Land: {{ farmer.land_area }} Acres</div>
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
