<template>
  <q-timeline layout="loose" side="left" color="secondary">
    <q-timeline-entry
      v-for="(event, idx) in events"
      :key="event._id"
      :side="idx % 2 ? 'left' : 'right'"
    >
      <template v-slot:title>
        <div class="text-subtitle1">February 22, 1986</div>
        <div class="text-caption">22:00</div>
      </template>
      <template v-slot:subtitle>
        5 minutes
        <div class="text-caption">Pump</div>
      </template>
      <div>
        <div class="text-body2">Some description or notes</div>
      </div>
    </q-timeline-entry>
  </q-timeline>
</template>

<script>
export default {
  name: 'FieldWaterTimeline',

  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>
