<template lang="pug">
  q-page
    EncyclopediaSearchHeader(:showBigHeader="showBigHeader" @exec-search="executeSearch")
    EncyclopediaArticleList(:articles="searchResults")

</template>

<script>
import EncyclopediaSearchHeader from 'components/Encyclopedia/SearchHeader'
import EncyclopediaArticleList from 'components/Encyclopedia/ArticleList'

export default {
  name: 'Encyclopedia',
  components: {
    EncyclopediaSearchHeader,
    EncyclopediaArticleList
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
  methods: {
    executeSearch(searchQuery) {
      console.log(searchQuery)
    }
  }
}
</script>
