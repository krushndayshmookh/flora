<template>
  <q-page padding class="flex flex-center my-bg">
    <div class="row justify-center flex-block full-width">
      <q-card class="col-12 col-md-3 col-sm-6 box-shadow">
        <q-img src="~assets/images/login-card.jpg">
          <div class="absolute-bottom text-center">
            <div class="text-h4">Flora</div>
          </div>
        </q-img>
        <q-card-section>
          <q-input
            color="teal"
            filled
            v-model="username"
            placeholder="Username"
            input-class="text-left"
            class="q-mb-md"
            type="text"
          >
            <template v-slot:prepend>
              <q-icon style="margin-right:25px" name="person" />
            </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="password"
            placeholder="Password"
            input-class="text-left"
            class="q-mb-md"
            type="password"
            float-label="Password"
          >
            <template v-slot:prepend>
              <q-icon style="margin-right:25px" name="lock" />
            </template>
          </q-input>

          <q-btn
            rounded
            dense
            size="18px"
            color="primary"
            label="Log in"
            class="full-width"
            style="margin-top:12px"
            @click="login"
          />

          <div class="text register text-grey">
            New to Flora?

            <q-btn flat to="/auth/register"> Register Here </q-btn>
          </div>
          <div class="text-left register">Flora version 1.1</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// import backgroundUrl from '~/assets/images/login-bg.jpg'
export default {
  data() {
    return {
      username: '',
      password: ''
      //backgroundUrl
    }
  },
  methods: {
    login() {
      // console.log({
      //   username: this.username,
      //   password: this.password
      // })

      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/auth/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response.data)
          this.$router.push('/')
        })
        .catch(error => {
          console.error(error)
          this.$q.notify('Error occured.')
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>

<style scoped>
.my-bg {
  background-image: url('~assets/images/login-bg.jpg');
}

.flex-block {
  min-height: 500px;
}

.register {
  margin-top: 18px;
  margin-bottom: 10px;
  text-align: center;
  /* color:rgba(0, 0, 0, 0.54); */
}
.box-shadow {
  box-shadow: 0 6.8px 8.2px rgba(0, 0, 0, 0.034),
    0 9.7px 12.3px rgba(0, 0, 0, 0.048), 0 18.5px 23px rgba(0, 0, 0, 0.06),
    0 32.3px 29.9px rgba(0, 0, 0, 0.072), 0 49.8px 54.4px rgba(0, 0, 0, 0.086),
    0 120px 89px rgba(0, 0, 0, 0.12);
}
</style>
