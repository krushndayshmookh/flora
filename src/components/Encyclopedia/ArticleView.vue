<template lang="pug">
  q-card
    //- q-img(:src="encyclopedia.image" style="height: 150px;")
    q-card-section(horizontal)
      q-card-section
        .text-h6 {{ article.title }}
        .text-subtitle2 {{ article.description }}
      q-card-section.absolute-right
        //- q-btn(v-ripple outline  :to="'/encyclopedia/article/' + encyclopedia.id") View
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
