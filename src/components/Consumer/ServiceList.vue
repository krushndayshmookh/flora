<template>
  <q-page class="padding adjust-3">
    <div class="col-3 adjust-3" v-for="service in services" :key="service.id">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-img class="col-4" :src="service.image" />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h5 ellipsis">
                <router-link
                  style="color:black;text-decoration:none"
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
            <div class="text-caption" style="color:red" secoundary>
              {{ service.stock }}
            </div>
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
        <div class="q-pa-md q-gutter-sm">
          <q-card-actions>
            <q-btn flat icon="info" color="primary" @click="dealer = true"
              >&nbsp; &nbsp;Authorize Dealer</q-btn
            >

            <q-btn flat icon="phone" color="primary" @click="contact = true"
              >&nbsp; &nbsp;Contact Number</q-btn
            >
          </q-card-actions>
        </div>
      </q-card>
      <q-dialog v-model="dealer">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Close icon</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="contact">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Contact Number</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            1800-123-12
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'ServiceList',
  props: ['services'],
  data() {
    return {
      dealer: false,
      contact: false
    }
  }
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
