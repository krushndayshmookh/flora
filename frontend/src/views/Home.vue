<template lang="pug">
  .home
    section.section
      .container
        .row
          .col.s12
            h3 Dashboard

        .row
          .col.s12
            .btn Add field

        .row
          .col.s12
            FieldOverview(field="1")
          .col.s12
            FieldOverview(field="2")

</template>

<script>
// @ is an alias to /src
import FieldOverview from '@/components/FieldOverview.vue'

export default {
	name: 'Home',
	components: {
		FieldOverview
	}
}
</script>
