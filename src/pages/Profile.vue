<template >
  <q-page class="q-pt-lg">
    <div style="text-align:center">
      <q-img
        :src="user.photourl"
        spinner-color="white"
        style="height: 150px; width: 150px; border-radius: 100%"
      />
      <h2>{{ user.name }}</h2>
       <h4>{{ user.phone }}</h4>
      <h4>{{ user.email }}</h4>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'kirti Togarwar',
        email: 'kirti.togarwar@gmail.com',
        photourl: 'https://placeimg.com/500/300/nature',
        phone: '1234567890'
      }
    }
  }
}
</script>