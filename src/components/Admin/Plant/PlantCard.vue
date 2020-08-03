<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">
        {{ plant.name }}
        <q-btn round flat icon="edit" class="float-right" color="primary" />
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="text-overline">Harvest in {{ plant.timeToHarvest }} Days</div>
      <div class="text-caption">Grows in {{ plant.region.name }}</div>
      <div class="text-caption">
        {{ plant.stages ? plant.stages.length : 0 }} Stages
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    plant: {
      type: Object,
      default: () => ({
        _id: 0,
        name: 'Plant Name',
        timeToHarvest: 120,
        region: {
          name: 'Nagpur'
        },
        stages: [
          {
            _id: 0,
            title: 'Stage title',
            description: 'Stage description'
          },
          {
            _id: 1,
            title: 'Stage title',
            description: 'Stage description'
          }
        ]
      })
    }
  }
}
</script>
