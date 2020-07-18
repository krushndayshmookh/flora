<template>
  <q-page>
    <ConsumerSearchHeader :showBigHeader="showBigHeader" @exec-search="executeSearch"></ConsumerSearchHeader>
    <ConsumerChemicalList :chemicals="searchResults"></ConsumerChemicalList>
  </q-page>
</template>

<style scoped>
</style>

<script>
import ConsumerSearchHeader from 'components/Consumer/SearchHeader'
import ConsumerChemicalList from 'components/Consumer/ChemicalList'

export default {
  name: 'Consumer',
  components: {
    ConsumerSearchHeader,
    ConsumerChemicalList
  },
  data() {
    return {
      searchResults: [
        {
          id: 0,
          title: 'Tractors and Machines',
          description: 'some description about machines',
          lastEdited: '5 min ago',
          rating: 5
        },
        {
          id: 1,
          title: 'Tools and Chemicals',
          description: 'some description about Chemicals',
          lastEdited: '15 min ago',
          rating: 4
        },
        {
          id: 2,
          title: 'Seeds',
          description: 'some description about Seeds',
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
