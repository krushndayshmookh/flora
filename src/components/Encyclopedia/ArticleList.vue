<template>
  <q-page>
    <q-list bordered padding class="q-pa-sm">
      <q-item
        v-for="article in articles"
        :key="article.id"
        v-ripple
        clickable
        :to="'/encyclopedia/article/' + article._id"
      >
        <q-item-section>
          <div class="text-subtitle text-bold">
            {{ article.title }}
          </div>
        </q-item-section>
        <q-item-section>
          <q-item-label caption lines="2">
            {{ article.description }}</q-item-label
          >
        </q-item-section>
        <q-item-section side>
          <q-avatar size="64px">
            <q-img class="rounded-borders" src="images/article-1.png" />
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-list>
    <q-separator />
  </q-page>
</template>

<script>
export default {
  name: 'EncyclopediaArticleList',
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>
