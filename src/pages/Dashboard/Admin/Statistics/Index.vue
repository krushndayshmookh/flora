<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-6 col-sm-4 col-md-3">
        <q-btn
          stack
          label="Regional Crops"
          class="fit q-pa-md"
          icon="map"
          to="/admin/statistics/region-crops"
          color="green"
        />
      </div>

      <div class="col-6 col-sm-4 col-md-3">
        <q-btn
          stack
          label="Regional Crop Details"
          class="fit q-pa-md"
          icon="map"
          to="/admin/statistics/region-crops-details"
          color="blue"
        />
      </div>

      <div class="col-6 col-sm-4 col-md-3">
        <q-btn
          stack
          label="Regional Collection Centers"
          class="fit q-pa-md"
          icon="map"
          to="/admin/statistics/region-centers"
          color="orange"
        />
      </div>

      <div class="col-6 col-sm-4 col-md-3">
        <q-btn
          stack
          label="Regional Collection Center Details "
          class="fit q-pa-md"
          icon="map"
          to="/admin/statistics/region-centers-details"
          color="pink"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageStatistics'
}
</script>
