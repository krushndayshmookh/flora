<template lang="pug">
  .market
    section.section
      .container
        .row
          .col.s12
            h3 Market

        .row
          .col.s12
            MarketTabs(:tabs="tabs" @change="onTabChange")

        
        MarketItems(:items="items")
            

</template>

<script>
// @ is an alias to /src
import MarketTabs from '@/components/market/Tabs.vue'
import MarketItems from '@/components/market/Items.vue'

export default {
	name: 'Market',
	components: {
		MarketTabs,
		MarketItems
	},
	data() {
		return {
			tabs: [
				{
					id: '0',
					label: 'Cat 0'
				},
				{
					id: '1',
					label: 'Cat 1'
				},
				{
					id: '2',
					label: 'Cat 2'
				},
				{
					id: '3',
					label: 'Cat 3'
				}
			],
			items: [
				{
					name: 'item 1',
					img: '/sample.jpg',
					description: 'description',
					price: 34
				},
				{
					name: 'item 1',
					img: '/sample.jpg',
					description: 'description',
					price: 34
				},
				{
					name: 'item 1',
					img: '/sample.jpg',
					description: 'description',
					price: 34
				},
				{
					name: 'item 1',
					img: '/sample.jpg',
					description: 'description',
					price: 34
				}
			]
		}
	},
	methods: {
		onTabChange(tab) {
			console.log(tab)
		}
	}
}
</script>
