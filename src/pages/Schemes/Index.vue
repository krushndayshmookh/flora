<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://kj1bcdn.b-cdn.net/media/10448/agri1.jpg?format=webp" />
      <q-carousel-slide :name="2" img-src="https://www.pmindia.gov.in/wp-content/uploads/2016/01/925b1b87-9efb-4bbb-8aad-0d7aa6f1770e.jpg" />
      <q-carousel-slide :name="3" img-src="https://m.economictimes.com/thumb/msid-69702930,width-1200,height-900,resizemode-4,imgsize-574454/farmer.jpg" />
      <q-carousel-slide :name="4" img-src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/9/w900X450/fertiliser_pic_eps.jpg" />
    </q-carousel>
    <q-table title="Agriculture Schemes" :data="data" :columns="columns" row-key="name">
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              Welfare of farmers has been the top priority of Government of India.<br>
              For this it has implemented different schemes and programmes to revive agriculture sector and to improve economic conditions of the farmers. <br>
              These agricultural schemes and programmes are very beneficial for the farmers and they must know about it so as to take its benefit. <br>
              So through this article we will put a light on some of the most useful and popular government schemes in India.<br>
              Under {{ props.row.name }}.
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
      columns: [
        {
          name: 'scheme',
          required: true,
          label: 'Scheme Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'dept',
          align: 'center',
          label: 'Department Name',
          field: 'dept',
          sortable: true
        },
        {
          name: 'sdate',
          label: 'Application Start Date',
          field: 'sdate',
          sortable: true,
          style: 'width: 10px'
        },
        { name: 'edate', label: 'Application End Date', field: 'edate' },
        {
          name: 'apply',
          label: 'Apply here',
          field: 'apply',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      data: [
        {
          name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
          dept: 'Central Government of India',
          sdate: '30/5/2020',
          edate: '30/7/2020',
          apply: 'Apply here'
        },
        {
          name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
          dept: 'NDA government',
          sdate: '15/7/2020',
          edate: '12/8/2020',
          apply: 'Apply here'
        },
        {
          name: 'Pradhan Mantri Krishi Sinchai Yojana (PMKSY)',
          dept: 'Central Government of India',
          sdate: '5/1/2020',
          edate: '22/4/2020',
          apply: 'Apply here'
        },
        {
          name: 'Gramin Bhandaran Yojna',
          dept: 'State Government',
          sdate: '25/1/2020',
          edate: '20/2/2020',
          apply: 'Apply here'
        },
        {
          name: 'Livestock insurance Scheme',
          dept: 'State Government',
          sdate: '2/6/2020',
          edate: '8/8/2020',
          apply: 'Apply here'
        },
        {
          name: 'Micro Irrigation Fund (MIF)',
          dept: 'Central Government of India',
          sdate: '12/8/2020',
          edate: '8/10/2020',
          apply: 'Apply here'
        },
        {
          name: 'Soil Health Card Scheme',
          dept: 'State Government',
          sdate: '23/3/2020',
          edate: '31/5/2020',
          apply: 'Apply here'
        },
        {
          name: 'National Mission For Sustainable Agriculture (NMSA)',
          dept: 'Government of India',
          sdate: '19/2/2020',
          edate: '6/6/2020',
          apply: 'Apply here'
        },
        {
          name: 'E-NAM',
          dept: 'Government of India',
          sdate: '9/9/2020',
          edate: '30/11/2020',
          apply: 'Apply here'
        }
      ]
    }
  }
}
</script>
