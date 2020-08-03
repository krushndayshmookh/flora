<template>
  <q-page padding>
    <div class="column q-col-gutter-md">
      <q-card class="my-card">
        <q-img src="images/index-2.jpg" basic>
          <div class="absolute-bottom text-h6">
            {{ article.title }}
          </div>
        </q-img>

        <q-card-section>
          <div class="text-subtitle1 text-justify q-pa-lg">
            {{ article.description }}
          </div>

          <div class="text-subtitle1 text-justify q-pa-lg">
            {{ article.description }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ArticleView',
  //   props: {
  //     encyclopedia: {
  //       type: Object,
  //       default: () => ({
  //         id: 0,
  //         // image: '',
  //         title: '',
  //         description: ''
  //       })
  //     }
  //   },

  data() {
    return {
      article: {
        _id: 0,
        title: '',
        description: ''
      }
    }
  },
  mounted() {
    this.fetchArticle()
  },

  methods: {
    fetchArticle() {
      let articleID = this.$route.params.id

      this.$q.loading.show()

      this.$axios
        .get(process.env.API + '/encyclopedias/' + articleID)
        .then(response => {
          this.article = response.data
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    }
  }
}
</script>
