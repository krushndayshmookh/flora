<template lang="pug">
	.card-panel
		.row
			.col.s6

				h4 Field {{ field }} - size
				h4.light crop name
				p Expected harvest quntity: 234 kg
				p Planttion date: 23/3/2019
				p Expected harvest date: 23/3/2019

			.col.s6
				.row
					.col.s6
						.chart.card-panel.red
							p.white-text chart 1
					.col.s6
						.chart.card-panel.blue
							p.white-text chart 2
				.row
					.col.s4
						.btn.full-width Action 1
					.col.s4
						.btn.full-width Action 2
					.col.s4
						.btn.full-width Action 3

</template>

<style lang="scss" scoped>
.chart {
	min-height: 150px;
}
</style>

<script>
export default {
	name: 'FieldOverview',
	props: ['field']
}
</script>
