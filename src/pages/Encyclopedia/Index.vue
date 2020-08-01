<template>
  <q-page>
    <EncyclopediaSearchHeader
      :show-big-header="showBigHeader"
      @exec-search="executeSearch"
    >
    </EncyclopediaSearchHeader>

    <EncyclopediaArticleList :articles="searchResults">
    </EncyclopediaArticleList>

    <!-- <EncyclopediaArticleView :articles="searchResults">
    </EncyclopediaArticleView> -->
    <!-- <EncyclopediaArticleEdit :articles="searchResults">
    </EncyclopediaArticleEdit> -->

    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="btn">
      <!-- <q-btn fab icon="add" color="primary" to="/encyclopedia/new" /> -->
      <q-btn fab icon="add" color="primary" to="/encyclopedia/new-article" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import EncyclopediaSearchHeader from 'components/Encyclopedia/SearchHeader'
import EncyclopediaArticleList from 'components/Encyclopedia/ArticleList'
// import EncyclopediaArticleView from 'components/Encyclopedia/ArticleView'
// import EncyclopediaArticleEdit from 'components/Encyclopedia/ArticleEdit'

export default {
  name: 'Encyclopedia',
  components: {
    EncyclopediaSearchHeader,
    EncyclopediaArticleList
    // EncyclopediaArticleView,
    // EncyclopediaArticleEdit
  },
  data() {
    return {
      searchResults: [
        {
          id: 0,
          title: 'Article 0',
          description: 'some description about article',
          lastEdited: '5 min ago',
          rating: 5
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'some description about article',
          lastEdited: '15 min ago',
          rating: 4
        },
        {
          id: 2,
          title: 'Article 2',
          description: 'some description about article',
          lastEdited: '5 days ago',
          rating: 3
        }
      ],
      showBigHeader: true
    }
  },

  mounted() {
    this.fetchArticles()
  },

  methods: {
    executeSearch(searchQuery) {
      console.log(searchQuery)
    },
    fetchArticles() {
      this.$q.loading.show()
      this.$axios
        .get(process.env.API + '/encyclopedias')
        .then(response => {
          console.log(response.data)

          this.searchResults = response.data
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
