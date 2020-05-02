<template>
  <q-page padding class="flex flex-center bg-blue-9">
    <div class="row justify-center full-width">
      <q-card class="my-card col-4 q-pa-lg">
        <img alt="Flora logo" src="~assets/quasar-logo-full.svg" />

        <p class="text-h3 text-center">Login</p>

        <q-card-section>
          <q-input
            rounded
            standout
            v-model="username"
            placeholder="username"
            input-class="text-center"
            class="q-mb-lg q-mt-lg"
            type="text"
          />
          <q-input
            rounded
            standout
            v-model="password"
            placeholder="password"
            input-class="text-center"
            class="q-mb-lg"
            type="password"
          />

          <q-btn
            rounded
            color="primary"
            label="Log in"
            class="full-width"
            size="lg"
            @click="login"
          />
        </q-card-section>
        
      </q-card>
    </div>
  </q-page>
</template>