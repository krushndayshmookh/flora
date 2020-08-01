<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Edit Article</div>
    </q-card-section>

    <q-card-section class="column q-col-gutter-md q-py-none">
      <q-input
        v-model="normalizedEncyclopedia.title"
        outlined
        color="teal"
        label="Title"
        type="text"
        class="col"
      />

      <q-input
        v-model="normalizedEncyclopedia.description"
        outlined
        color="teal"
        label="Description"
        type="text"
        class="col"
      />

      <!-- <q-select
        v-model="normalizedEncyclopedia.crop"
        outlined
        :options="cropOptions"
        label="Crop"
        class="col"
        map-options
        emit-value
      >
      </q-select> -->
    </q-card-section>

    <q-card-actions class="q-pa-md" align="right">
      <q-btn color="primary" @click="saveEncyclopedia">Save</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'ArticleEdit',

  props: {
    encyclopedia: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      normalizedEncyclopedia: {
        title: '',
        description: ''
      }
    }
  },

  mounted() {
    this.normalizeEncyclopedia()
  },

  methods: {
    normalizeEncyclopedia() {
      this.normalizedEncyclopedia = {
        ...this.normalizedEncyclopedia,
        ...this.encyclopedia
      }
    },

    saveEncyclopedia() {
      this.$q.loading.show()
      this.$axios
        .post(process.env.API+'/encyclopedias', this.normalizedEncyclopedia)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.$q.loading.hide()
          this.$emit('done')
          this.$router.replace('/encyclopedia')
        })
    }
  }
}
</script>
