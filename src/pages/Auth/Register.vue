<template>
  <q-page padding class="flex flex-center bg-blue-1">
    <div class="row justify-center full-width">
      <q-card class="col-12 col-md-3 col-sm-6">
        <q-img src="~assets/images/bg_card_login.jpg" basic>
          <div class="absolute-bottom text-center">
            <div class=" text-h4 ">Flora</div>
          </div>
        </q-img>

        <q-card-section>
          <q-input
            rounded
            dense
            standout
            v-model="user.name"
            placeholder="Name"
            input-class="text-center"
            class="q-mb-md"
            type="text"
          />
          <q-input
            rounded
            dense
            standout
            v-model="user.email"
            placeholder="Email"
            input-class="text-center"
            class="q-mb-md"
            type="email"
          />
          <q-input
            rounded
            dense
            standout
            v-model="user.phone"
            placeholder="Phone"
            input-class="text-center"
            class="q-mb-md"
            type="phone"
          />
          <q-input
            rounded
            dense
            standout
            v-model="user.password"
            placeholder="Password"
            input-class="text-center"
            class="q-mb-md"
            type="password"
          />

          <q-btn
            rounded
            color="primary"
            label="Register"
            class="full-width"
            @click="register"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        phone: ''
      }
    }
  },
  methods: {
    register() {
      console.log({...this.user})
    }
  }
}
</script>
