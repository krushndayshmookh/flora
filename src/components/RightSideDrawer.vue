<template lang="pug">
  q-drawer(v-model="drawerOpen" show-if-above elevated side="right")

    q-list(padding)
      q-item-label(header) User Setting
      q-item(clickable to="/farmer" v-ripple)
        q-item-section(avatar)
          q-icon(name="person")
        q-item-section Profile
      q-item(clickable to="/auth/register" v-ripple)
        q-item-section(avatar)
          q-icon(name="login")
        q-item-section Register 
      q-item(clickable to="/auth/login" v-ripple)
        q-item-section(avatar)
          q-icon(name="login")
        q-item-section Login   
      q-item(clickable to="/" v-ripple)
        q-item-section(avatar)
          q-icon(name="lock")
        q-item-section Logout
      
      

</template>

<script>
export default {
  name: 'RightSideDrawer',

  data() {
    return {}
  },

  computed: {
    drawerOpen: {
      get() {
        return this.$store.getters['general/rightSideDrawer']
      },
      set(opened) {
        this.$store.dispatch('general/setRightSideDrawer', opened)
      }
    }
  }
}
</script>

<template>
  <q-card>
    <q-list>
      <q-list class="rounded-borders text-primary">
        <q-item
          v-for="userType in userTypes"
          :key="userType._id"
          v-ripple
          clickable
          :to="userType.link"
          active-class="active-user-link"
        >
          <q-item-section avatar>
            <q-icon :name="userType.icon" />
          </q-item-section>

          <q-item-section>{{ userType.label }}</q-item-section>
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
      userTypes: [
        {
          _id: 'profile',
          label: 'Profile',
          link: '/profile',
          icon: 'person'
        },
        {
          _id: 'admin',
          label: 'Admin',
          link: '/admin',
          icon: 'settings'
        },
        {
          _id: 'logout',
          label: 'Logout',
          link: '/auth/login',
          icon: 'lock'
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
        }
      ]
    }
  },
  computed: {
    currentUserType() {
      return this.$store.getters['general/rightSideDrawer']
    }
  }
}
</script>
