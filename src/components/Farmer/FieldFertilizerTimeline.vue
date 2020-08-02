<template>
  <q-timeline layout="comfortable" side="right" color="secondary">
    <q-timeline-entry v-for="event in events" :key="event._id">
      <template v-slot:subtitle>
        February 22, 2020
      </template>
      <template v-slot:title>
        Urea
      </template>
      <div>
        <div class="text-body2">Some description or notes</div>
      </div>
    </q-timeline-entry>
  </q-timeline>
</template>

<script>
export default {
  name: 'FieldFertilizerTimeline',

  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>
