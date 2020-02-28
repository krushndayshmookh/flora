<template lang="pug">
  .items.row
    .col.s6.m4.l3(v-for="item in items")
      .card
        .card-image
          img(:src="item.img")

        .card-content
          span.card-title.truncate {{ item.name }}
          p {{ item.description }}
          p Rs. {{ item.price }}
          p Available {{ item.available }}
        .card-action.right-align
          .btn.green Edit

</template>

<script>
// import M from 'materialize-css'

export default {
	name: 'MarketDashboardItems',
	props: ['items'],
	data() {
		return {}
	},
	mounted() {},
	methods: {}
}
</script>
