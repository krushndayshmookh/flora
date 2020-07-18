<template lang="pug">
  q-card.bg-primary.text-white(square)
    q-card-section(v-if="showBigHeader")
      .text-h4 Encyclopedia

    q-card-section
      q-input(dark standout dense v-model="searchQuery" @keypress.enter="execSearch" placeholder="Search")
        template(v-slot:prepend)
          q-icon(v-if="searchQuery === ''" name="search")
        template(v-slot:append)
          q-icon.cursor-pointer(v-if="searchQuery !== ''" name="clear" @click="searchQuery = ''")

</template>

<script>
export default {
  name: 'EncyclopediaSearchHeader',

  data() {
    return {
      searchQuery: ''
    }
  },

  props: ['showBigHeader'],

  watch: {
    searchQuery(query) {
      this.execSearch()
    }
  },

  methods: {
    execSearch() {
      if (this.searchQuery) this.$emit('exec-search', this.searchQuery)
    }
  }
}
</script>
