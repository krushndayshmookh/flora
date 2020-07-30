<template>
  <div class="q-pa-md">
    <div
      class=" col text-h5 register text-white text-weight-medium "
      style="background-color:#da675b;position: relative;min-height: 50px;"
    >
      We are here to Serve You !!!
    </div>
    <div class="row q-col-gutter-md">
      <div class="col">
        <q-card class="my-card">
          <q-card-section horizontal>
            <div class="col-xs-5 col-md-4" style="margin-top:8px">
              <q-img :src="'/images/fertilizer4.jpg'" />
              <!-- <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
              >
                <q-carousel-slide
                  :name="1"
                  :img-src="'/images/fertilizer4.jpg'"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://5.imimg.com/data5/IW/KV/UG/SELLER-95569923/mahafeed-mahagreen-500x500.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://5.imimg.com/data5/DW/BR/MY-346777/multibloom-water-soluble-foliar-spray-fertilizer-250x250.jpg"
                />
                <q-carousel-slide
                  :name="4"
                  img-src="https://www.ugaoo.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/f/e/fertilizers-1_1.jpg"
                /> </q-carousel
              ><br /><br /> -->

              <div
                class="col text-h6 register text-grey text-weight-medium  q-p-md "
              >
                Rating:
                <q-rating
                  v-model="ratingModel"
                  :max="5"
                  size="1em"
                  color="grey"
                  :color-selected="ratingColors"
                />
              </div>

              <q-card-actions
                class=" q-p-md q-gutter-sm"
                style=" margin-left:10px;"
              >
                <q-btn
                  flat
                  class="full-width"
                  icon="shopping_cart"
                  style="background: #ff9f00; color: white;"
                  >&nbsp; &nbsp;Add to Cart</q-btn
                >

                <q-btn
                  class="full-width"
                  flat
                  icon="add_shopping_cart"
                  style="background: #fb641b; color: white;"
                  >&nbsp; &nbsp;Buy Now</q-btn
                >
              </q-card-actions>
            </div>
            <div class="col-7">
              <q-card-section>
                <div class="col no-wrap">
                  <div class=" text-h5 ellipsis text-left  q-pa-xs">
                    MahaGreen - 1 Kg<br />
                  </div>
                  <div
                    class=" text-grey text-caption q-pa-xs"
                    style="font-weight: 500;"
                  >
                    <q-icon name="star" color="green" size="1.5em" />
                    &nbsp;2,217 Ratings & 364 Reviews
                  </div>
                  <div
                    class=" text-green text-weight-bold q-pa-xs"
                    style="font-weight: 500; color:#388e3c; font-size:14px"
                  >
                    Special priceends in less than15h:23m:20s
                  </div>
                </div>

                <div class="row no-wrap items-center">
                  <div
                    class="col text-h5 text-left text-weight-bold q-pa-xs"
                    style="font-size:28px"
                  >
                    ₹217
                  </div>
                </div>

                <div class="col  text-weight-bold  items-left  q-pa-xs">
                  Available offers:<br />
                  <div class="col text-left text-caption q-pa-xs">
                    <q-icon name="bookmark" /> &nbsp;Bank Offer 5% Unlimited
                    Cashback on Axis Bank Credit Card<br />
                    <q-icon name="bookmark" /> &nbsp;Bank Offer 5% off* with
                    Axis Bank Buzz Credit Card<br />
                    <q-icon name="bookmark" /> &nbsp;No Cost EMI on Flipkart
                    Axis Bank Credit Card<br />
                    <q-icon name="bookmark" />&nbsp;On Defect return policy
                    Provided by the Manufacturer
                  </div>
                </div>
                <div class="q-pa-xs">
                  <q-input
                    v-model="text"
                    outline
                    :dense="dense"
                    style="max-width:300px"
                    ><q-btn flat> Dilevery</q-btn>
                    <template v-slot:prepend>
                      <q-icon name="place" />
                    </template> </q-input
                  ><br />
                </div>
                <div class="col  text-weight-bold  items-left  q-pa-xs">
                  Product Description:<br />
                  <div class="col text-left text-caption q-pa-xs">
                    This growth promoter ensures good health of young seedings.
                    It improves the growth of stem, branches and maintains
                    desired leaves on plants. It fulfills the deficiency of food
                    materials to plants and improves resistance to pests and
                    diseases.<br /><br />
                  </div>
                </div>

                <div
                  class=" col text-h5 register text-black text-weight-medium "
                  style="background-color:#fce0dd;position: relative;min-height: 50px;"
                >
                  FREE Delivery on orders over ₹999
                </div>
              </q-card-section>
            </div>
          </q-card-section>

          <div class="q-pa-md">
            <q-table title="Product Details" :data="data" :columns="columns" />
          </div>
          <q-separator />
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      padding: true,
      slide: 1,
      ratingModel: 7,
      ratingColors: [
        'light-green-3',
        'light-green-6',
        'green',
        'green-9',
        'green-10'
      ],
      columns: [
        {
          required: true,
          label: 'Specification',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`
        },
        {
          name: 'Description',
          align: 'center',
          label: 'Description',
          field: 'description'
        }
      ],
      data: [
        {
          name: 'Technical Content',
          description: '6% Humic Acid'
        },
        {
          name: 'Dosage',
          description: '1-2 ml in 1Ltr Water'
        },
        {
          name: 'Application Type',
          description: 'Sprayer'
        },
        {
          name: 'SKU',
          description: 'NUFLL011'
        },
        {
          name: 'Plant Height',
          description: 'NO'
        },
        {
          name: 'Product Weight',
          description: '631 g'
        },
        {
          name: 'Product Height',
          description: '17.5 cm'
        },
        {
          name: 'Product Width',
          description: '7.5 cm'
        },
        {
          name: 'Product Depth<',
          description: '7.5 cm'
        }
      ]
    }
  }
}
</script>
<style scoped>
.my-card {
  width: 100%;
}
.register {
  /* margin-top: 6px; */
  /* margin-left: 24px; */
  text-align: center;
  padding: 2%;

  /* color:rgba(0, 0, 0, 0.54); */
}
</style>
