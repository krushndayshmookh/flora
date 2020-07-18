<template>
<div class="products">
    <div class="row">
        <div class=" col-1 text-h6 register text-grey ">
            Filters :
        </div>
        <div class="col-2">
            <q-select bottom-slots v-model="model" :options="cat" label="" counter maxlength="12" :dense="dense" :options-dense="denseOpts" style="width:120px;margin-right:14px">
                <template v-slot:hint>
                    By Category
                </template>
            </q-select>
        </div>
        <div class="col-2">
            <q-select bottom-slots v-model="model" :options="sel" label="" counter maxlength="12" :dense="dense" :options-dense="denseOpts" style="width:120px;margin-right:14px">
                <template v-slot:hint>
                    By Seller
                </template>
            </q-select>
        </div>
        <div class="col-2">
            <q-select bottom-slots v-model="model" use-input use-chips multiple @new-value="createValue" :options="filterOptions" @filter="filterFn" style="width:120px;margin-right:14px">
                <template v-slot:hint>
                    Select Multiple Brand
                </template>
            </q-select>
        </div>
        <div class="col-3">
            <q-input v-model="search" debounce="1000" placeholder="Search" hint="Debouncing 1000ms">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
    </div>
    <div class="row">
      <div class="col adjust-3">
        <q-card>
          <q-img src="~assets/images/fertilizer2.jpg" />

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
                <a style="color:grey;text-decoration:none" :href="`/product`"> Agrovit - 500gm</a>
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                Plant Fertilizer
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption" secoundary>
              In Stock (13pc) Price: ₹140.00
            </div>
            <div class="text-caption text-grey">
              It is safe and an excellent wetting agent which improves<br />
              wetting,spreading, sticking quality and enhance<br />
              effectiveness of pesticidant spray.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="shopping_cart" color="primary">
              &nbsp; &nbsp;Add to Cart
            </q-btn>
            <q-btn flat icon="add_shopping_cart" color="primary">
              &nbsp; &nbsp;Buy Now
            </q-btn>
          </q-card-actions>
        </q-card>
      
      </div>
      <div class="col adjust-3">
        <q-card>
          <q-img src="~assets/images/fertilizer2.jpg" />

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
                <a style="color:grey;text-decoration:none" :href="`/product`"> Agrovit - 500gm</a>
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                Plant Fertilizer
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption" secoundary>
              In Stock (13pc) Price: ₹140.00
            </div>
            <div class="text-caption text-grey">
              It is safe and an excellent wetting agent which improves<br />
              wetting,spreading, sticking quality and enhance<br />
              effectiveness of pesticidant spray.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="shopping_cart" color="primary">
              &nbsp; &nbsp;Add to Cart
            </q-btn>
            <q-btn flat icon="add_shopping_cart" color="primary">
              &nbsp; &nbsp;Buy Now
            </q-btn>
          </q-card-actions>
        </q-card>
      
      </div><div class="col adjust-3">
        <q-card>
          <q-img src="~assets/images/fertilizer2.jpg" />

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
                <div class="col text-h6 ellipsis">
                <a style="color:grey;text-decoration:none" :href="`/product`"> Agrovit - 500gm</a>
              </div>
                
                </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                Plant Fertilizer
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption" secoundary>
              In Stock (13pc) Price: ₹140.00
            </div>
            <div class="text-caption text-grey">
              It is safe and an excellent wetting agent which improves<br />
              wetting,spreading, sticking quality and enhance<br />
              effectiveness of pesticidant spray.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="shopping_cart" color="primary">
              &nbsp; &nbsp;Add to Cart
            </q-btn>
            <q-btn flat icon="add_shopping_cart" color="primary">
              &nbsp; &nbsp;Buy Now
            </q-btn>
          </q-card-actions>
        </q-card>
      
      </div><div class="col adjust-3">
        <q-card>
          <q-img src="~assets/images/fertilizer2.jpg" />

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
                <a style="color:grey;text-decoration:none" :href="`/product`"> Agrovit - 500gm</a>
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                Plant Fertilizer
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption" secoundary>
              In Stock (13pc) Price: ₹140.00
            </div>
            <div class="text-caption text-grey">
              It is safe and an excellent wetting agent which improves<br />
              wetting,spreading, sticking quality and enhance<br />
              effectiveness of pesticidant spray.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat icon="shopping_cart" color="primary">
              &nbsp; &nbsp;Add to Cart
            </q-btn>
            <q-btn flat icon="add_shopping_cart" color="primary">
              &nbsp; &nbsp;Buy Now
            </q-btn>
          </q-card-actions>
        </q-card>
      
      </div>
      
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            model: null,
            cat: [
                'All', 'Cotton', 'Rice', 'Wheat', 'Corn', 'Fertilizer', 'seeds'
            ],
            sel: [
                'All', 'Wheet', 'Corn', 'etc'
            ],
            filterOptions: [
                'All', 'Wheet', 'Corn', 'etc'
            ]

        }
    }
}
</script>

<style>
.register {
    margin-top: 32px;
    margin-bottom: 10px;
    margin-left: 24px;
    text-align: left;
    width: 100px;
    /* color:rgba(0, 0, 0, 0.54); */
}

.select-box {
    /* margin-left: '35px'; */
    width: 'auto';
}
.adjust-3{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 28px;
  /* margin-bottom: 10px; */
}
.box-shadow {
    box-shadow:
        0 6.8px 8.2px rgba(0, 0, 0, 0.034),
        0 9.7px 12.3px rgba(0, 0, 0, 0.048),
        0 18.5px 23px rgba(0, 0, 0, 0.06),
        0 32.3px 29.9px rgba(0, 0, 0, 0.072),
        0 49.8px 54.4px rgba(0, 0, 0, 0.086),
        0 120px 89px rgba(0, 0, 0, 0.12);

}
</style>
