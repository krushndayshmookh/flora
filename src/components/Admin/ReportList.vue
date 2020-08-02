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
        <q-card class=" text q-pa-md">
          <q-card-section>
            <div class="text-overline">{{ report.date }}</div>
            <!-- <div class="text-body1 ">{{ report.title }}</div> -->
            <div class="text-h6 q-pa-xs ">
              Name :{{ report.first_name }} {{ report.last_name }}
            </div>
            <div class="text-h6 q-pa-xs ">Phone :{{ report.phone }}</div>
            <div class="text-h6 q-pa-xs">Filed :{{ report.field }}</div>
            <div class="text-h6 q-pa-xs">Crop :{{ report.crop }}</div>
            <div class="text-h6 q-pa-xs">
              Failure Type :{{ report.failure }}
            </div>
            <!-- <div class="text-caption">{{ report.reporter.name }}</div>
        <div class="text-caption">{{ report.reporter.name }}</div> -->
          </q-card-section>
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
  }
}
</script>
