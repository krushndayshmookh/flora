<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Contacts</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item-label header>Online</q-item-label>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item-label header>Offline</q-item-label>

      <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="grey" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
const contacts = [ {
  id: 1,
  name: 'Vithika jha',
  email: 'vithikajha@gmail.com',
  letter: 'V'
}, {
  id: 2,
  name: 'Krushn Dayshmookh',
  email: 'krushndayshmookh@gmail.com',
  letter: 'K'
}, {
  id: 3,
  name: 'Krishnandu Baidhya',
  email: 'krishnandubaidhya@gmail.com',
  letter: 'K'
}, {
  id: 4,
  name: 'Kaushal Kumar',
  email: 'kuahalkumar@gmail.com',
  letter: 'K'
} ]

const offline = [ {
  id: 5,
  name: 'Kirti Togarwar',
  email: 'kirtitogarwar@gmail.com',
  avatar: 'avatar6.jpg'
}, {
  id: 6,
  name: 'Anuprita Dhoble',
  email: 'anupritadhoble@gmail.com',
  avatar: 'avatar2.jpg'
} ]

export default {
  data () {
    return {
      contacts,
      offline
    }
  }
}
</script>