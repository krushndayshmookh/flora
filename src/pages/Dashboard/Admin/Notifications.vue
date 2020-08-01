<template>
  <q-page padding>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-h5">Float a new notification</div>
      </q-card-section>

      <q-card-section class="q-py-none">
        <q-input
          v-model="newNotification.title"
          filled
          label="Title"
          type="text"
          class="q-mb-md"
        />
        <q-select
          v-model="newNotification.type"
          filled
          label="Type"
          map-options
          emit-value
          :options="notificationTypes"
          class="q-mb-md"
        />
        <q-input
          v-model="newNotification.body"
          filled
          placeholder="Enter something..."
          type="textarea"
        />
      </q-card-section>

      <q-card-actions align="right" class="q-pa-md">
        <q-btn round color="primary" icon="send" @click="sendNotification" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageNotifications',

  data() {
    return {
      newNotification: {
        title: null,
        body: null,
        type: 'general'
      },

      notificationTypes: [
        {
          value: 'urgent',
          label: 'Urgent'
        },
        {
          value: 'general',
          label: 'General'
        }
      ]
    }
  },

  mounted() {},

  methods: {
    sendNotification() {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/notifications', this.newNotification)
        .then(response => {
          console.log(response.data)
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            icon: 'check',
            message: 'Sent!'
          })
          this.newNotification = {
            title: null,
            body: null,
            type: 'general'
          }
        })
        .catch(err => {
          console.error(err)
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            icon: 'error',
            message: 'Error!'
          })
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
