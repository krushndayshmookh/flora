<template>
  <q-page padding>
    <div class="text-h4 q-my-md">
      Agriculture Schemes
      <q-btn
        class="float-right"
        icon="add"
        label="New Scheme"
        color="primary"
        to="/admin/schemes/new"
      />
    </div>
    <q-table :data="data" :columns="columns" row-key="name">
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
              :icon="props.expand ? 'remove' : 'add'"
              @click="props.expand = !props.expand"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-btn v-if="col.name == 'apply'" flat :href="col.value">
              Apply Here
            </q-btn>
            <div v-else>{{ col.value }}</div>
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="6">
            <div class="text-left">
              <ul>
                <li>
                  Welfare of farmers has been the top priority of Government of
                  India. For this it has implemented different schemes and
                  programmes to revive agriculture sector and to improve
                  economic conditions of the farmers.
                </li>
                <li>
                  These agricultural schemes and programmes are very beneficial
                  for the farmers and they must know about it so as to take its
                  benefit.
                </li>
                <li>
                  So through this article we will put a light on some of the
                  most useful and popular government schemes in India.
                </li>
              </ul>

              <div class="text-caption">
                <a href="http://agricoop.nic.in/programmes-schemes-listing">
                  For More Information, Click Here
                </a>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
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
        {
          name: 'edate',
          label: 'Application End Date',
          field: 'edate'
        },
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
