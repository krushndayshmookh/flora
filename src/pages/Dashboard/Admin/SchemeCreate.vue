<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">New Scheme</div>
      </q-card-section>
      <q-card-section class="q-py-none">
        <q-input
          v-model="scheme.title"
          filled
          label="Title"
          type="text"
          class="q-mb-md"
        >
          <template v-slot:prepend>
            <q-icon name="title" />
          </template>
        </q-input>

        <q-input
          v-model="scheme.link"
          filled
          label="Link"
          type="text"
          class="q-mb-md"
        >
          <template v-slot:prepend>
            <q-icon name="link" />
          </template>
        </q-input>

        <q-input
          v-model="scheme.department"
          filled
          label="Department"
          type="text"
          class="q-mb-md"
        >
          <template v-slot:prepend>
            <q-icon name="business" />
          </template>
        </q-input>

        <q-input
          v-model="scheme.dateStart"
          filled
          color="teal"
          mask="date"
          class="q-mb-md"
          label="Applications Open"
        >
          <template v-slot:prepend>
            <q-icon name="today" />
          </template>
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="scheme.dateStart"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          v-model="scheme.dateEnd"
          filled
          color="teal"
          mask="date"
          class="q-mb-md"
          label="Applications Close"
        >
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="scheme.dateEnd"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          v-model="scheme.body"
          filled
          label="Description"
          type="textarea"
        >
          <template v-slot:prepend>
            <q-icon name="subject" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="right" class="q-pa-md">
        <q-btn label="Submit " type="submit" color="secondary" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      scheme: {
        title: null,
        body: null,
        dateStart: null,
        dateEnd: null,
        department: null,
        link: null
      }
    }
  }
}
</script>

<style></style>
