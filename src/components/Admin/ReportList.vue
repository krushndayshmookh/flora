<template>
  <q-list>
    <q-item
      v-for="report in reports"
      :key="report._id"
      v-ripple
      clickable
      :to="'/reports/' + report._id"
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
        <div class="text-overline">{{ report.date }}</div>
        <div class="text-body1">{{ report.title }}</div>
        <div class="text-caption">{{ report.reporter.name }}</div>
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
  }
}
</script>
