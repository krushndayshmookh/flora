<template>
  <q-page class="padding adjust-3">
    <div class="col-3 adjust-3" v-for="service in services" :key="service.id">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img class="col-4" src="https://cdn.quasar.dev/img/parallax1.jpg" />

          <q-card-section>
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
            <div class="text-caption" secoundary>{{ service.stock }}</div>
            <div class="text-caption text-grey">{{ service.description }}</div>
          </q-card-section>
        </q-card-section>

        <q-separator />
        <q-btn
          fab
          color="primary"
          icon="share"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />
        <q-card-actions style="align:right">
          <q-btn flat icon="info" color="primary"git
            >&nbsp; &nbsp;Authorize Dealer</q-btn
          >
          <q-btn flat icon="phone" color="success"
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
