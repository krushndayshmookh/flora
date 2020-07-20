<template>
  <div class="q-pa-md">
    <div
      class=" col text-h5 register text-white text-weight-medium "
      style="background-color:#da675b;position: relative;
min-height: 50px;"
    >
      We are here to Serve You !!!
    </div>
    <div class="row">
      <div class="col">
        <q-card class="my-card">
          <q-card-section horizontal>
            <div class="col-5">
              <!-- <q-img :src="'/images/fertilizer4.jpg'" /> -->
              <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
              >
              <q-carousel-slide :name="1" img-src="https://www.ugaoo.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/m/a/mahagreen_crop_vegetables_front_1.jpg" />
              <q-carousel-slide :name="2" img-src="https://5.imimg.com/data5/IW/KV/UG/SELLER-95569923/mahafeed-mahagreen-500x500.jpg" />
              <q-carousel-slide :name="3" img-src="https://5.imimg.com/data5/DW/BR/MY-346777/multibloom-water-soluble-foliar-spray-fertilizer-250x250.jpg" />
              <q-carousel-slide :name="4" img-src="https://www.ugaoo.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/f/e/fertilizers-1_1.jpg" />
              </q-carousel><br><br>
              <div class="row no-wrap items-left">
                  <div class="col text-h9 text-left">
                    Rating:
                    <q-rating
                      v-model="ratingModel"
                      size="2em"
                      :max="10"
                      color="primary"
                    />
                  </div>
                </div>

              <q-card-actions style="margin-top:18px">
                <q-btn
                  class="full-width"
                  flat
                  icon="shopping_cart"
                  style="background: grey; color: white"
                  >&nbsp; &nbsp;Add to Cart</q-btn
                >
              </q-card-actions>
              <q-card-actions style="margin-top:18px">
                <q-btn
                  class="full-width"
                  flat
                  icon="add_shopping_cart"
                  style="background: goldenrod; color: white"
                  >&nbsp; &nbsp;Buy Now</q-btn
                >
              </q-card-actions>
            </div>
            <div class="col-7">
              <q-card-section>
                <div class="row no-wrap items-center">
                  <div class="col text-h4 ellipsis text-center">
                    MahaGreen - 1 Kg
                  </div>
                  <div
                    class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                  >
                    <q-icon name="place" />
                    Filter
                  </div>
                </div>

                <div class="row no-wrap items-center">
                  <div class="col text-h5 text-left">
                    ₹217 
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="info" />
                    Info
                  </div>
                </div>

                <div class="row no-wrap items-left">
                  <div class="col text-h7 text-left">
                    Available offers:<br>
                    <q-icon name="book"/>Bank Offer 5% Unlimited Cashback on Axis Bank Credit Card<br>
                    <q-icon name="book"/>Bank Offer 5% off* with Axis Bank Buzz Credit Card<br>
                    <q-icon name="add"/>No Cost EMI on Flipkart Axis Bank Credit Card<br>
                    <q-icon name="add"/>On Defect return policy Provided by the Manufacturer
                  </div>
                </div><br><br>

                <div class="row no-wrap items-left">
                  <div class="col text-h9 text-left">
                    Product Description:<br>
                    Mahagreen Improves, chlorophyll formation, growth and health of young seeding and growing plants. Mahagreen Improves stunted growth of stem, branches and maintains desired leaves on plants. Mahagreen Provides deficient food materials to plants under unfavorable growing conditions.
                  <div class="text-h7">
                    <a href="https://www.ugaoo.com/mahagreen-1-kg.html">Read More</a>
                  </div>
                  </div>
                </div>

                

                <q-markup-table>
                  <thead>
                    <tr>
                      <th class="text-right">Specification</th>
                      <th class="text-right">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="text-right">Technical Content</th>
                      <td class="text-right">6% Humic Acid</td>
                    </tr>
                    <tr>
                      <th class="text-right">Dosage</th>
                      <td class="text-right">1-2 ml in 1Ltr Water</td>
                    </tr>
                    <tr>
                      <th class="text-right">Application Type</th>
                      <td class="text-right">Sprayer</td>
                    </tr>
                    <tr>
                      <th class="text-right">SKU</th>
                      <td class="text-right">NUFLL011</td>
                    </tr>
                    <tr>
                      <th class="text-right">Plant Height</th>
                      <td class="text-right">No</td>
                    </tr>
                    <tr>
                      <th class="text-right">Product Weight</th>
                      <td class="text-right">631 g</td>
                    </tr>
                    <tr>
                      <th class="text-right">Product Height</th>
                      <td class="text-right">17.5 cm</td>
                    </tr>
                    <tr>
                      <th class="text-right">Product Width</th>
                      <td class="text-right">7.5 cm</td>
                    </tr>
                    <tr>
                      <th class="text-right">Product Depth</th>
                      <td class="text-right">7.5 cm</td>
                    </tr>
                  </tbody>
                </q-markup-table>
                
              </q-card-section>
            </div>
          </q-card-section>

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
      slide: 1,
      ratingModel: 7,
      lorem:
        'Lorem ipsum dolor siLorem ipsum dolor sit amet, consecWikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. t amet, consecWikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of volunteer editors using a wiki-based editing system. It is the largest and most popular general reference work on the World Wide Web.tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
<style scoped>
.my-card {
  width: 100%;
}
</style>
