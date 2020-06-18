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
            v-model="username"
            placeholder="username"
            input-class="text-center"
            class="q-mb-md"
            type="text"
          />
          <q-input
            rounded
            dense
            standout
            v-model="password"
            placeholder="password"
            input-class="text-center"
            class="q-mb-md"
            type="password"
          />

          <q-btn
            rounded
            color="primary"
            label="Log in"
            class="full-width"
            @click="login"
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
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
