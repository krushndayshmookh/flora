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