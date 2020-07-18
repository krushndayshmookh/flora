<template lang="pug">
  .q-ma-md
    q-list
      q-item.q-pa-md(clickable v-ripple v-for="chemical in chemicals" :key="chemical.id" :to="'dashboard/consumer/chemical/'+chemical.id")
        q-item-section
          q-item-label {{ chemical.title }}
          q-item-label(caption lines="1") {{ chemical.description }}
        q-item-section(side top)
          q-item-label(caption) {{ chemical.lastEdited }}
          .text-orange
            q-icon(name="star" color="yellow" v-for="(ratestar, idx) in chemical.rating" :key="idx")

</template>

<script>
export default {
  name: 'ConsumerChemicalList',
  props: ['chemicals']
}
</script>
