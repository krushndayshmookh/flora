<!-- eslint-disable -->
<template>
  <q-page class="padding adjust-3">
    <div v-for="service in services" :key="service.id" class="col-3 adjust-3">
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
            <q-card-actions style="align:right">
              <q-btn flat icon="info" color="primary" label="Authorize Dealer">
                <q-popup-proxy>
                  <q-toolbar class="bg-primary text-white shadow-2">
                    <q-toolbar-title>Authorized Patners</q-toolbar-title>
                  </q-toolbar>

                  <q-list bordered>
                    <q-item
                      v-for="contact in contacts"
                      :key="contact.id"
                      v-ripple
                      class="q-my-sm"
                      clickable
                    >
                      <q-item-section avatar>
                        <q-avatar color="primary" text-color="white">
                          {{ contact.letter }}
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>{{ contact.shop }}</q-item-label>
                        <q-item-label caption lines="1">{{
                          contact.location
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-popup-proxy>
              </q-btn>

              <q-btn
                flat
                push
                icon="phone"
                color="success"
                label="Contact Detail"
              >
                <q-popup-proxy>
                  <q-list bordered>
                    <q-item
                      v-for="contact in contacts"
                      :key="contact.id"
                      v-ripple
                      class="q-my-sm"
                      clickable
                    >
                      <q-item-section avatar>
                        <q-avatar color="primary" text-color="white">
                          {{ contact.letter }}
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>{{ contact.name }}</q-item-label>
                        <q-item-label caption lines="1">{{
                          contact.email
                        }}</q-item-label>
                        <q-item-label caption lines="1">{{
                          contact.number
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-popup-proxy>
              </q-btn>
            </q-card-actions>
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </q-page>
</template>
<script>
const contacts = [
  {
    id: 1,
    shop: 'Sonalika Tractor',
    location: 'Nagpur',
    name: 'Ruddy Jedrzej',
    email: 'rjedrzej0@discuz.net',
    number: '123-123-1234',
    letter: 'S'
  },
  {
    id: 2,
    shop: 'Sonalika Tractor',
    location: 'Nagpur',
    name: 'Mallorie Alessandrini',
    email: 'malessandrini1@marketwatch.com',
    number: '123-123-1234',
    letter: 'S'
  },
  {
    id: 3,
    location: 'Nagpur',
    shop: 'Sonalika Tractor',
    name: 'Elisabetta Wicklen',
    number: '123-123-1234',
    email: 'ewicklen2@microsoft.com',
    letter: 'S'
  },
  {
    id: 4,
    location: 'Nagpur',
    shop: 'Sonalika Tractor',
    number: '123-123-1234',
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    letter: 'S'
  }
]
export default {
  name: 'ServiceList',
  props: {
    services: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dealer: false,
      contact: false,
      contacts
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
