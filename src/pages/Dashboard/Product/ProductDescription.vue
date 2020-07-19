<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img src="~assets/images/fertilizer2.jpg" />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">Humacid - 500ml</div>
        <div class="text-overline text-orange-9">
          IN STOCK ( 13 PCS) Price: ₹360.00
        </div>
        <div class="text-caption text-grey">
          1)Easy 7 days refund or replacement if products delivered are damaged.
          2)Get instant discount from ₹25 to ₹300 with Debit card/ Credit card/
          Net banking payments for cart value above ₹300
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Add to Cart" />
        <q-btn flat color="primary" label="Place Order" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>

          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6">Details Description</div>
              <!-- <div class="text-subtitle2">by John Doe</div> -->
            </q-card-section>

            <q-markup-table>
              <thead>
                <tr>
                  <th class="text-left">Detail</th>
                  <th class="text-right">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-left">Technical Content</th>
                  <td class="text-left">6% Humic Acid</td>
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
          </q-card>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      lorem:
        'Humacid gives plants the nutrients they need to develop a lush foliage, abundant growth and high yields. It is mixed with a portion of 1-2 ml with 1 litre of water and applied via spraying. Plants can also be treated with drip irrigation to ensure a steady supply of nutrients. Can be applied to both indoor and outdoor plants.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
