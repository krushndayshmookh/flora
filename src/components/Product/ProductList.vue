<template>
  <q-page class="padding adjust-3">
    <div class="row q-col-gutter-md">
      <div
        class="col-12 col-sm-3"
        v-for="product in products"
        :key="product.id"
      >
        <q-card>
          <q-img :src="product.image" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="share"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                <router-link
                  style="color:grey;text-decoration:none"
                  :to="'/product/' + product.id"
                  >{{ product.title }}</router-link
                >
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                {{ product.filter }}
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption" secoundary>{{ product.stock }}</div>
            <div class="text-caption text-grey">{{ product.description }}</div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="shopping_cart" color="primary"
              >&nbsp; &nbsp;Add to Cart</q-btn
            >
            <q-btn flat icon="add_shopping_cart" color="primary"
              >&nbsp; &nbsp;Buy Now</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'ProductList',
  props: ['products']
}
</script>
<style scoped>
.adjust-3 {
  margin-left: 10px;
  margin-right: 10px;
  /* margin-bottom: 10px; */
}
</style>
