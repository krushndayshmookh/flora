<template>
  <div class="q-col-gutter-md">
    <!-- <div class="row   " style="background-color: white">
      <div class=" col-1 col-sm-2 col-xs-3 text-h6 register text-grey ">
        Filters :
      </div>
      <div class="col-2 col-sm-2 col-xs-4">
        <q-select
          bottom-slots
          v-model="selectedCat"
          :options="cat"
          counter
          maxlength="12"
          :dense="dense"
          :options-dense="denseOpts"
          style="width:120px;margin-right:14px"
        >
          <template v-slot:hint>
            By Category
          </template>
        </q-select>
      </div>
      <div class="col-2 col-sm-2 col-xs-5">
        <q-select
          bottom-slots
          v-model="selectedSel"
          :options="sel"
          label=""
          counter
          maxlength="12"
          :dense="dense"
          :options-dense="denseOpts"
          style="width:120px;margin-right:14px"
        >
          <template v-slot:hint>
            By Seller
          </template>
        </q-select>
      </div>
      <div class="col-3 col-sm-2 col-xs-5">
        <q-select
          bottom-slots
          v-model="model"
          use-input
          use-chips
          multiple
          @new-value="createValue"
          :options="filterOptions"
          @filter="filterFn"
          style="width:120px;margin-right:14px"
        >
          <template v-slot:hint>
            Select Multiple Brand
          </template>
        </q-select>
      </div>
      <div class="col-6 col-sm-2 col-xs-6">
        <q-input
          v-model="search"
          debounce="1000"
          placeholder="Search"
          hint="Debouncing 1000ms"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>      
    </div> -->



    

    <div class="row" style="background-color: white; overflow-x:auto">
      <!-- <template> -->
  <div class="q-pa-md col-12">
    <q-card-section horizontal>
    
    <!-- <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="(item, index) in items" :key="index" class="caption"> -->
          <div class=" col-1 col-sm-2 col-xs-3 text-h6 register text-grey ">
             Filters :
          </div>
      <div class="col-2 col-sm-2 col-xs-4">
        <q-select
          bottom-slots
          v-model="selectedCat"
          :options="cat"
          counter
          maxlength="12"
          :dense="dense"
          :options-dense="denseOpts"
          style="margin-right:14px"
        >
          <template v-slot:hint>
            By Category
          </template>
        </q-select>
      </div>
      <div class="col-2 col-sm-2 col-xs-5">
        <q-select
          bottom-slots
          v-model="selectedSel"
          :options="sel"
          label=""
          counter
          maxlength="12"
          :dense="dense"
          :options-dense="denseOpts"
          style="margin-right:14px"
        >
          <template v-slot:hint>
            By Seller
          </template>
        </q-select>
      </div>
      <div class="col-3 col-sm-2 col-xs-5">
        <q-select
          bottom-slots
          v-model="model"
          use-input
          use-chips
          multiple
          @new-value="createValue"
          :options="filterOptions"
          @filter="filterFn"
          style="margin-right:14px"
        >
          <template v-slot:hint>
            Select Multiple Brand
          </template>
        </q-select>
      </div>
      <div class="col-6 col-sm-2 col-xs-6">
        <q-input
          v-model="search"
          debounce="1000"
          placeholder="Search"
          hint="Debouncing 1000ms"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <!-- </div> -->
      <!-- <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll> -->
    
    </q-card-section>
  </div>
<!--  </template> -->
    </div>

    
    <div class=" col text-h5 register text-white text-weight-medium " style="background-color:#da675b;position: relative;
min-height: 50px;">
      We are here to Serve You !!!
    </div>

    <ProductList :products="ProductShow"></ProductList>
  </div>
</template>

<script>
import ProductList from 'components/Product/ProductList'
export default {
  name: 'Product',
  components: {
    ProductList
  },

  data() {
    return {
      items: [ {}],
      model: null,

      selectedCat: 'All',
      selectedSel: 'All',
      cat: ['All', 'Cotton', 'Rice', 'Wheat', 'Corn', 'Fertilizer', 'seeds'],
      sel: ['All', 'Wheet', 'Corn', 'etc'],
      filterOptions: ['All', 'Wheet', 'Corn', 'etc'],
      ProductShow: [
        {
          id: 0,
          image: '/images/fertilizer1.jpg',
          title: 'Agrovit - 500gm',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹140.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 1,
          image: '/images/fertilizer2.jpg',
          title: 'Humacid - 500ml',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹360.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 2,
          image: '/images/fertilizer3.jpg',
          title: 'MahaFlora - 1 Kg',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 3,
          image: '/images/fertilizer4.jpg',
          title: 'MahaGreen - 1 Kg',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 4,
          image: '/images/fertilizer5.jpg',
          title: 'Cow Manure - 5 Kg',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 5,
          image: '/images/fertilizer6.jpg',
          title: 'Vermicompost - 5 kg',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 6,
          image: '/images/fertilizer5.jpg',
          title: 'Cow Manure - 5 Kg',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        },
        {
          id: 7,
          image: '/images/fertilizer4.jpg',
          title: 'MahaGreen - 1 Kg',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' It is safe and an excellent wetting agent which improves wetting,spreading, sticking quality and enhance effectiveness of pesticidant spray.'
        }
      ]
    }
  },
   watch:{
       selectedCat(newVal, oldVal){
           console.log(newVal)



            let objs = [
                {
                    _id:0,
                    cat: 'cat1',
                    tags: ['tag1', 'tag2']
                },

                {
                    _id: 1,
                    cat: 'cat2',
                    tags: ['tag2'] 
                }
            ]

            // apply filter on category

            let filtered = objs.filter(obj=>obj.cat=='cat1')

            function filterCat(arr, query) {
                return arr.filter(item=>item.cat===query)
            }


            // apply filter on tags

            let filtered2 = objs.filter(obj=>obj.tags.includes('tag1'))


       }
   },
    methods: {
    onLoad (index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({})
          done()
        }
      }, 2000)
    }
  }
}
</script>

<style>
.register {
 
margin-top: 12px;
  /* margin-left: 24px; */
  text-align: center;
  padding: 2%;

  /* color:rgba(0, 0, 0, 0.54); */
}
.select-box {
  /* margin-left: '35px'; */
  width: 'auto';
}

.box-shadow {
  box-shadow: 0 6.8px 8.2px rgba(0, 0, 0, 0.034),
    0 9.7px 12.3px rgba(0, 0, 0, 0.048), 0 18.5px 23px rgba(0, 0, 0, 0.06),
    0 32.3px 29.9px rgba(0, 0, 0, 0.072), 0 49.8px 54.4px rgba(0, 0, 0, 0.086),
    0 120px 89px rgba(0, 0, 0, 0.12);
}
.arrow_box::after, .arrow_box::before {
    left: 100%;
    top: 67%;
    border: solid transparent;
        border-top-color: transparent;
        border-top-width: medium;
        border-right-color: transparent;
        border-right-width: medium;
        border-bottom-color: transparent;
        border-bottom-width: medium;
        border-left-color: transparent;
        border-left-width: medium;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
</style>
