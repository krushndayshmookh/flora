<template>
  <q-page padding>
    <q-input
      v-model="report.title"
      filled
      placeholder="Title"
      class="q-mb-md"
      type="text"
    >
      <template v-slot:prepend>
        <q-icon name="local_offer" />
      </template>
    </q-input>

    <q-input
      v-model="report.phone"
      filled
      placeholder="Phone"
      class="q-mb-md"
      type="text"
    >
      <template v-slot:prepend>
        <q-icon name="phone" />
      </template>
    </q-input>

    <q-input
      v-model="report.description"
      filled
      placeholder="Descriiption"
      class="q-mb-md"
      type="textarea"
    >
      <template v-slot:prepend>
        <q-icon name="info" />
      </template>
    </q-input>

    <q-btn
      class="full-width fixed-bottom"
      color="primary"
      size="lg"
      label="Send"
      @click="sendReport"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageReport',
  data() {
    return {
      report: {
        title: null,
        description: null,
        phone: null
      }
    }
  },

  methods: {
    sendReport() {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/report', this.report)
        .then(response => {
          console.log(response.data)
          this.$q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted!'
          })
          this.$router.back()
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
