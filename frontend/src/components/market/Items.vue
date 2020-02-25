<template lang="pug">
  .items.row
    .col.s6.m4.l3(v-for="item in items")
      .card
        .card-image
          img(:src="item.img")

        .card-content
          span.card-title.truncate {{ item.name }}
          p {{ item.description }}

        .card-action.right-align
          .btn.red Rs. {{ item.price }}

</template>

<script>
// import M from 'materialize-css'

export default {
	name: 'MarketItems',
	props: ['items'],
	data() {
		return {}
	},
	mounted() {},
	methods: {}
}
</script>
