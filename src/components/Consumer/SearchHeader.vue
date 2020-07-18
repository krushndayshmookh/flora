<template lang="pug">
  q-card.q-pa-md.bg-primary.text-white(square)
    q-card-section
      h2.q-ma-md(v-if="showBigHeader") Search Categories
      .row.items-center
        .col
          q-input.q-mx-md(dark standout v-model="searchQuery" @keypress.enter="execSearch")
            template(v-slot:prepend)
              q-icon(v-if="searchQuery === ''" name="search")

            template(v-slot:append)
              q-icon.cursor-pointer(v-if="searchQuery !== ''" name="clear" @click="searchQuery = ''")
        .col-auto
          q-btn(round icon="search" v-if="searchQuery !== ''" color="accent" size="lg" @click="execSearch")


</template>

<script>
export default {
  name: 'ConsumerSearchHeader',
  data() {
    return {
      searchQuery: ''
    }
  },
  props: ['showBigHeader'],
  methods: {
    execSearch() {
      this.$emit('exec-search', this.searchQuery)
    }
  }
}
</script>
