<template lang="pug">


q-page.q-pa-lg
   
  q-card(flat bordered)
    q-card-section(horizontal)
      q-avatar(rounded color="primary" size='144px')
        q-img(:src="user.photourl")
      q-card-section
        h4.q-my-xs {{ user.name }}
        p.q-my-xs {{ user.email }}
        p.q-my-xs Phone: {{ user.phone }}

</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Kirti Togarwar',
        email: 'kirti.togarwar@gmail.com',
        photourl: 'https://placeimg.com/500/300/nature',
        phone: '7667677899'
      },
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>