<template>
  <q-list>
    <q-item
      v-for="report in reports"
      :key="report._id"
      v-ripple
      clickable
      
    >
      <q-item-section avatar>
        <q-avatar>
          <q-icon
            size="32px"
            :name="report.resolved ? 'check_circle' : 'report'"
            :color="report.resolved ? 'green' : 'red'"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">{{ report.date }}</div>
              <div class="text-subtitle q-mt-sm q-pa-xs">
                Name :{{ report.first_name }} {{ report.last_name }}
              </div>

              <div class="text-caption text-grey q-mt-sm q-pa-xs ">
                Phone : {{ report.phone }}<br />
                Filed : {{ report.field }}<br />
                Crop : {{ report.crop }}<br />
                Failure Type : {{ report.failure }}
              </div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-actions v-if="!report.resolved" align="right" class="q-pa-md">
            <q-btn
              label="Mark As Resolved "
              type="submit"
              color="primary"
              @click="resolveReport(report._id)"
            />
            <q-btn label="Decline " type="submit" color="negative" />
          </q-card-actions>
        </q-card>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'ReportList',

  props: {
    reports: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    resolveReport(reportId) {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API + '/reports/' + reportId + '/resolve')
        .then(() => {
          this.$emit('done')
        })
        .catch(e => console.error(e))
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
