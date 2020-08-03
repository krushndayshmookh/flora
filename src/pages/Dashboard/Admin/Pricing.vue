<template lang="pug">
q-page
  q-card.bg-primary.text-white(square)
    q-card-section
      .text-h4 Market Prices

    q-card-section
      q-input(
        dark,
        standout,
        dense,
        v-model='searchQuery',
        @keypress.enter='execSearch',
        placeholder='Search'
      )
        template(v-slot:prepend)
          q-icon(v-if='searchQuery === ""', name='search')
        template(v-slot:append)
          q-icon.cursor-pointer(
            v-if='searchQuery !== ""',
            name='clear',
            @click='searchQuery = ""'
          )

  .row
    .col-12.col-md-6
      q-list(bordered, separator)
        q-item(
          v-for='report in reports',
          :key='report._id',
          v-ripple,
          clickable,
        )
          q-item-section
            .text-body1 {{ report.crop.name }}
            .text-caption {{ report.date }}

          q-item-section(side) {{ report.crop.price }}
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,

      reports: [
        {
          _id: 0,
          crop: {
            name: 'Potatoes',
            price: '20 Rs/kg'
          },
          date: '3 Aug 2020 14:35'
        },
        {
          _id: 1,
          crop: {
            name: 'Tomatoes',
            price: '15 Rs/kg'
          },
          date: '3 Aug 2020 14:35'
        },
        {
          _id: 2,
          crop: {
            name: 'Cabbage',
            price: '50 Rs/kg'
          },
          date: '3 Aug 2020 14:35'
        },
        {
          _id: 3,
          crop: {
            name: 'Brinjal',
            price: '25 Rs/kg'
          },
          date: '3 Aug 2020 14:35'
        }
      ]
    }
  },

  methods: {
    execSearch() {}
  }
}
</script>
