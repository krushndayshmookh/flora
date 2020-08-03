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
  name: 'UserChooser',

  data() {
    return {
      userTypes: [
        {
          _id: 'farmer',
          label: 'Farmer',
          link: '/farmer/fields',
          icon: 'agriculture'
        },
        {
          _id: 'admin',
          label: 'Government',
          link: '/admin',
          icon: 'settings'
        },
        {
          _id: 'trader',
          label: 'Trader',
          link: '/trader/orders',
          icon: 'local_shipping'
        },
        {
          _id: 'doctor',
          label: 'Doctor',
          link: '/doctor',
          icon: 'local_hospital'
        },
        {
          _id: 'investor',
          label: 'Investor',
          link: '/investor',
          icon: 'monetization_on'
        },
        {
          _id: 'expert',
          label: 'Expert',
          link: '/expert',
          icon: 'school'
        },
        {
          _id: 'consumer',
          label: 'Consumer',
          link: '/consumer',
          icon: 'face'
        },
        {
          _id: 'procurement',
          label: 'Procurement Center',
          link: '/procurement',
          icon: 'archive'
        }
        // {
        //   _id: 'login',
        //   label: 'Login',
        //   link: '/auth/login',
        //   icon: 'vpn_key'
        // },
        // {
        //   _id: 'register',
        //   label: 'Register',
        //   link: '/auth/register',
        //   icon: 'lock'
        // }
      ]
    }
  },

  computed: {
    currentUserType() {
      return this.$store.getters['general/currentUserType']
    }
  }
}
</script>

<style lang="scss">
.active-user-link {
  color: white;
  background: #f2c037;
}
</style>
