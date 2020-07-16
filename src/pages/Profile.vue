<template >
  <q-page class="q-pt-lg">
    <div style="text-align:center">
      <q-img
        :src="user.photourl"
        spinner-color="white"
        style="height: 150px; width: 150px; border-radius: 100%"
      />
      <h1>{{ user.name }}</h1>
      <h3>{{ user.email }}</h3>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'kirti',
        email: 'kirti.dayshmookh@gmail.com',
        photourl: 'https://placeimg.com/500/300/nature'
      }
    }
  }
}
</script>