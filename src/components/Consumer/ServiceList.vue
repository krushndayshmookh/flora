<template>
  <q-page class="padding adjust-3">
    <div class="col-3 adjust-3" v-for="service in services" :key="service.id">
      <q-card>
        <!-- <q-img :src="service.image" /> -->

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="share"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              <router-link
                style="color:grey;text-decoration:none"
                :to="'/service/' + service.id"
                >{{ service.title }}</router-link
              >
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              {{ service.filter }}
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption" secoundary>{{ service.stock }}</div>
          <div class="text-caption text-grey">{{ service.description }}</div>
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-btn flat icon="info" color="primary"
            >&nbsp; &nbsp;Authorize Dealer</q-btn
          >
          <q-btn flat icon="phone" color="primary"
            >&nbsp; &nbsp;Contact Number</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'ServiceList',
  props: ['services']
}
</script>
<style scoped>
.adjust-3 {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
