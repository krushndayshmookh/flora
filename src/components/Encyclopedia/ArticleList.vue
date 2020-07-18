<template lang="pug">
  q-list
    q-item.q-pa-md(clickable v-ripple v-for="article in articles" :key="article.id" :to="'/encyclopedia/article/'+article.id")
      q-item-section
        q-item-label {{ article.title }}
        q-item-label(caption lines="1") {{ article.description }}
      q-item-section(side top)
        q-item-label(caption) {{ article.lastEdited }}
        .text-orange
          q-icon(name="star" color="yellow" v-for="(ratestar, idx) in article.rating" :key="idx")

</template>

<script>
export default {
  name: 'EncyclopediaArticleList',
  props: ['articles']
}
</script>
