<template>
  <div class="q-col-gutter-md">
    <div class=" col text-h5 register text-grey text-weight-medium ">
      We are here to Serve You !!!
    </div>

    <ServiceList :services="ServiceShow"></ServiceList>
  </div>
</template>

<script>
import ServiceList from 'components/Consumer/ServiceList'
export default {
  name: 'Service',
  components: {
    ServiceList
  },

  data() {
    return {
      model: null,

      selectedCat: 'All',
      selectedSel: 'All',
      cat: ['All', 'Cotton', 'Rice', 'Wheat', 'Corn', 'Fertilizer', 'seeds'],
      sel: ['All', 'Wheet', 'Corn', 'etc'],
      filterOptions: ['All', 'Wheet', 'Corn', 'etc'],
      ServiceShow: [
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
  watch: {
    selectedCat(newVal, oldVal) {
      console.log(newVal)

      let objs = [
        {
          _id: 0,
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

      let filtered = objs.filter(obj => obj.cat == 'cat1')

      function filterCat(arr, query) {
        return arr.filter(item => item.cat === query)
      }

      // apply filter on tags

      let filtered2 = objs.filter(obj => obj.tags.includes('tag1'))
    }
  }
}
</script>

<style>
.register {
  margin-top: 32px;

  /* margin-left: 24px; */
  text-align: center;

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
</style>
