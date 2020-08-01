<template>
  <q-page>
    <q-tabs v-model="tab" inline-label class="bg-primary text-white ">
      <q-tab name="unresolved" icon="mail" label="Unresolved" />
      <q-tab name="resolved" icon="drafts" label="Resolved" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="unresolved" class="q-pa-none">
        <ReportList :reports="reports.unresolved" />
      </q-tab-panel>

      <q-tab-panel name="resolved" class="q-pa-none">
        <ReportList :reports="reports.resolved" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import ReportList from 'components/Admin/ReportList'

export default {
  name: 'PageReports',

  components: { ReportList },

  data() {
    return {
      tab: 'unresolved',
      reports: {
        unresolved: [],
        resolved: []
      }
    }
  },

  mounted() {
    this.fetchReports()
  },

  methods: {
    fetchReports() {
      this.$q.loading.show()
      this.$axios
        .get(process.env.API + '/reports')
        .then(response => {
          console.log(response.data)
          this.reports.unresolved = response.data.data.filter(r => !r.resolved)
          this.reports.resolved = response.data.data.filter(r => r.resolved)
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
