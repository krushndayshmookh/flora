<template>
  <q-card>
    <q-list>
      <q-list class="rounded-borders text-primary">
        <q-item
          v-for="link in links"
          :key="link._id"
          v-ripple
          clickable
          :to="link.link"
          active-class="active-user-link"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-list>
  </q-card>
</template>

<script>
export default {
  name: 'RightSideDrawer',

  data() {
    return {
      links: [
        {
          _id: 'profile',
          label: 'Profile',
          link: '/profile',
          icon: 'person'
        },
        {
          _id: 'about',
          label: 'About',
          link: '/about',
          icon: 'info'
        },
        {
          _id: 'login',
          label: 'Login',
          link: '/auth/login',
          icon: 'vpn_key'
        },
        {
          _id: 'register',
          label: 'Register',
          link: '/auth/register',
          icon: 'lock'
        },
        {
          _id: 'logout',
          label: 'Logout',
          link: '/auth/login',
          icon: 'lock'
        }
      ]
    }
  }
}
</script>
