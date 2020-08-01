<template lang="pug">
  #q-app
    router-view
</template>

<script>
export default {
  name: 'App',
  sockets: {
    connect() {
      console.log('Socket connected.')
    }
  }
}
</script>
