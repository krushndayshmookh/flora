<template>
  <div class="q-col-gutter-md">
    <div
      class=" col text-h5 register text-white text-weight-medium "
      style="background-color:#da675b;position: relative;
min-height: 50px;"
    >
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
          image: '/images/service1.png',
          title: 'Powertrac 445 PLUS',
          filter: 'Machine and Service',
          stock: 'Range Starts From Rs. 6.56 lakh - 6.94 lakh',
          description:
            ' Welcome Buyers, this post is about Powertrac 445 PLUS Tractor, this tractor comes with all the advanced qualities. This post contains all the information about the tractor Powertrac 445 PLUS specifications, price, hp, engine and many more.'
        },
        {
          id: 1,
          image: '/images/service2.png',
          title: 'Cultivator',
          filter: 'Machine and Service',
          stock: 'In Stock (13pc) Price: ₹360.00',
          description:
            'The spring loaded tiller is suitable for use in stone and root obstructed soil as the spring allows the tynes of the cultivator to lift upward when any load or stone comes into the passage.The Mahindra Rigid tyne cultivator is sturdy and capable of withstanding tough working conditions in heavy soil. This implement can break hard soil efficiently and uproot stubble to leave the ground perfectly worked. long lasting and fuel efficient.Mahindra Applitracs Spring loaded Cultivator is designed for all types of root crop and for general cultivation work. It helps prepare the seed bed quickly and economically'
        },
        {
          id: 2,
          image: '/images/service3.png',
          title: 'Tractor Mounted Combine Harvester',
          filter: 'Machine and Service',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' Single machine that can do all operations from Harvesting, Threshing, Cleaning to Unloading of grains into gunny bags.Tractor can be put to multiple use when the tractor is dismounted from the combined harvester during off season.Saves time and manual effort and can be self driven on roads.Better design of threshing unit reduces grain damage and improves threshing efficiency.'
        },
        {
          id: 3,
          image: '/images/service4.png',
          title: 'Trolley',
          filter: 'Machine and Service',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            'The Tractor Trolleys are available in Two and Four wheel models. The most basic term used for the tractor attachment is Trolley or Trailer. The Tractor Trolley is known for its quality, durability, best service and availability of spare parts.'
        },
        {
          id: 4,
          image: '/images/service2.png',
          title: 'Cultivator',
          filter: 'Machine and Service',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            'The spring loaded tiller is suitable for use in stone and root obstructed soil as the spring allows the tynes of the cultivator to lift upward when any load or stone comes into the passage.The Mahindra Rigid tyne cultivator is sturdy and capable of withstanding tough working conditions in heavy soil. This implement can break hard soil efficiently and uproot stubble to leave the ground perfectly worked. long lasting and fuel efficient.Mahindra Applitracs Spring loaded Cultivator is designed for all types of root crop and for general cultivation work. It helps prepare the seed bed quickly and economically'
        },
        {
          id: 5,
          image: '/images/service1.png',
          title: 'Powertrac 445 PLUS',
          filter: 'Machine and Service',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' Welcome Buyers, this post is about Powertrac 445 PLUS Tractor, this tractor comes with all the advanced qualities. This post contains all the information about the tractor Powertrac 445 PLUS specifications, price, hp, engine and many more.'
        },
        {
          id: 6,
          image: '/images/service3.png',
          title: 'Tractor Mounted Combine Harvester',
          filter: 'Machine and Service',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            ' Single machine that can do all operations from Harvesting, Threshing, Cleaning to Unloading of grains into gunny bags.Tractor can be put to multiple use when the tractor is dismounted from the combined harvester during off season.Saves time and manual effort and can be self driven on roads.Better design of threshing unit reduces grain damage and improves threshing efficiency.'
        },
        {
          id: 7,
          image: '/images/service4.png',
          title: 'Trolley',
          filter: 'Plant Fertilizer',
          stock: 'In Stock (13pc) Price: ₹315.00',
          description:
            'The Tractor Trolleys are available in Two and Four wheel models. The most basic term used for the tractor attachment is Trolley or Trailer. The Tractor Trolley is known for its quality, durability, best service and availability of spare parts.'
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
</style>
