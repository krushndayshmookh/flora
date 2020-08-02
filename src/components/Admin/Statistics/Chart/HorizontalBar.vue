<script>
import { HorizontalBar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,

  mixins: [reactiveProp],

  props: {
    chartData: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },

  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
