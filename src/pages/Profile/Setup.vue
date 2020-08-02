<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">I am a ...</div>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <!-- <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole()">
              <q-img
                src="https://img.icons8.com/plasticine/400/000000/field.png"
              />
              Farmer
            </q-btn>
          </div> -->
          <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole('farmer')">
              <q-img src="https://img.icons8.com/color/400/000000/field.png" />
              Farmer
            </q-btn>
          </div>

          <!-- <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole()">
              <q-img
                src="https://img.icons8.com/plasticine/400/000000/shipped.png"
              />
              Trader
            </q-btn>
          </div> -->
          <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole('trader')">
              <q-img
                src="https://img.icons8.com/color/400/000000/shipped.png"
              />
              Trader
            </q-btn>
          </div>

          <!-- <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole()">
              <q-img
                src="https://img.icons8.com/plasticine/400/000000/doctor-female.png"
              />
              Doctor
            </q-btn>
          </div> -->
          <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole('doctor')">
              <q-img
                src="https://img.icons8.com/color/400/000000/doctor-female.png"
              />
              Doctor
            </q-btn>
          </div>

          <!-- <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole()">
              <q-img
                src="https://img.icons8.com/plasticine/400/000000/shopping-cart.png"
              />
              Comsumer
            </q-btn>
          </div> -->
          <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole('consumer')">
              <q-img
                src="https://img.icons8.com/color/400/000000/shopping-cart.png"
              />
              Comsumer
            </q-btn>
          </div>

          <!-- <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole()">
              <q-img
                src="https://img.icons8.com/plasticine/400/000000/literature.png"
              />
              Expert
            </q-btn>
          </div> -->
          <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole('expert')">
              <q-img
                src="https://img.icons8.com/color/400/000000/literature.png"
              />
              Expert
            </q-btn>
          </div>

          <!-- <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole()">
              <q-img
                src="https://img.icons8.com/plasticine/400/000000/administrative-tools.png"
              />
              Admin
            </q-btn>
          </div> -->
          <div class="col-6 col-sm-4 col-md-3">
            <q-btn color="primary" class="fit" outline stack @click="selectRole('admin')">
              <q-img
                src="https://img.icons8.com/color/400/000000/administrative-tools.png"
              />
              Admin
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      roles: []
    }
  },

  methods: {
    selectRole(role) {
      this.roles.push(role)
      this.updateUser()
    },

    updateUser() {
      this.$q.loading.show()
      this.$axios
        .put(process.env.API + '/users/roles', { roles: this.roles })
        .then(response => {
          console.log(response.data)
          this.$q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Updated!'
          })
          this.$router.replace('/')
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
