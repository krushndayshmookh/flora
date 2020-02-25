<template lang="pug">
  ul.tabs(ref="tabs")
    li.tab.col.s3(v-for="tab in tabs")
      a(@click="updateTabs(tab.id)") {{ tab.label }}
</template>

<script>
import M from 'materialize-css'

export default {
	name: 'MarketTabs',
	props: ['tabs'],
	data() {
		return {
			instance: '',
			index: 0
		}
	},
	mounted() {
		this.instance = M.Tabs.init(this.$refs.tabs)
	},
	methods: {
		updateTabs(id) {
			this.index = id
			this.$emit('change', this.index)
		}
	}
}
</script>

<style lang="scss">
// MY CUSTOM COLOR VARIABLES
$custom-color: #4caf50;

// RESTYLING THE TABS USING THE CUSTOM VARIABLE
.tabs {
	.tab {
		a {
			color: $custom-color;
			&.active {
				color: $custom-color;
			}
			&:hover {
				color: $custom-color;
			}
			&:focus {
				background-color: rgba($custom-color, 0.1);
			}
			&.active {
				background-color: rgba($custom-color, 0.15);
			}
		}
	}
	.indicator {
		background-color: $custom-color !important;
	}
}
</style>
