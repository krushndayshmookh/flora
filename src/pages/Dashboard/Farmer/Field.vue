<template lang="pug">
  q-page
    q-card.q-pa-md.bg-primary.text-white(square)
      q-card-section
        .row
          .col
            .text-weight-light.q-my-sm.text-h3.underlined {{ field.title }}
              q-popup-edit(:cover="false" v-model="field.title" title="Edit the Title" auto-save)
                q-input(outlined v-model="field.title" dense autofocus)


            h5.text-weight-light.q-my-none Area: {{ ' ' }}
              span.underlined {{ field.area }} acres
                q-popup-edit(:cover="false" v-model="field.area" title="Edit the Area" auto-save)
                  q-input(outlined v-model="field.area" dense autofocus)

                  q-card.q-ma-md.q-mt-md
      q-card-section
        h6.q-my-none Crop Details
      q-card-section.q-pt-none
        h5.text-weight-light.q-my-sm Crop: {{ ' ' }}
          span.underlined {{ field.crop }}
            q-popup-edit(:cover="false" v-model="field.crop" title="Edit the Crop" auto-save)
              q-select(outlined dense v-model="field.crop" :options="options" @filter="filterFn" @filter-abort="abortFilterFn" style="width: 250px")
                template(v-slot:no-option)
                  q-item
                    q-item-section.text-grey
                      | No results


        h5.text-weight-light.q-my-sm Planted on: {{ ' ' }}
          span.underlined {{ field.plantedDate }}
          q-popup-edit(:cover="false" v-model="field.plantedDate" title="Edit the planted date" auto-save mask="date" :rules="['date']")
            q-input(outlined v-model="field.plantedDate" mask="date" :rules="['date']" dense autofocus)
              template(v-slot:append)
                q-icon.cursor-pointer(name="event")
                  q-popup-proxy(ref="qDateProxy" transition-show="scale" transition-hide="scale")
                    q-date(v-model="field.plantedDate" @input="() => $refs.qDateProxy.hide()")

        h5.text-weight-light.q-my-sm Expected on: {{ field.expectedDate }}

        h5.text-weight-light.q-mt-sm.q-mb-none Expected quantity: {{ field.expectedQuantity }} kg



          .col-auto
            q-btn(color="green" label="Save" v-if="changed" @click="saveField")

    //-  q-card.q-ma-md.q-mt-md
    


    q-card.q-ma-md.q-mt-md
      q-card-section
        .row
          .col
            h6.q-my-none Water Record
          .col-auto
            q-btn(color="primary" elevated rounded  label="Add record" )


      q-card-section.q-pa-none
        q-table(:data="data" :columns="columns" flat row-key="name")

    q-card.q-ma-md.q-mt-md
      q-card-section
        .row
          .col
            h6.q-my-none Activity Record
          .col-auto
            q-btn(color="primary" elevated rounded  label="Add record" )


      q-card-section.q-pa-none
        q-table(:data="data" :columns="columns" flat row-key="name")

    q-card.q-ma-md.q-mt-md
      q-card-section
        .row
          .col
            h6.q-my-none Fertilizer Record
          .col-auto
            q-btn(color="primary" elevated rounded  label="Add record" )


      q-card-section.q-pa-none
        q-table(:data="data" :columns="columns" flat row-key="name")

    q-card.q-ma-md.q-mt-md
      q-card-section
        .row
          .col
            h6.q-my-none Expense Record
          .col-auto
            q-btn(color="primary" elevated rounded  label="Add record" )


      q-card-section.q-pa-none
        q-table(:data="data" :columns="columns" flat row-key="name")



</template>

<script>
import _ from 'lodash'
import moment from 'moment'

export default {
  name: 'DashboardFarmerField',
  data() {
    return {
      field: {
        title: '',
        area: 0,
        crop: '',
        plantedDate: ''
      },
      fieldInDB: null,
      options: null,

      columns: [
        {
          name: 'name',
          required: true,
          label: 'Date',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'calories',
          label: 'Pump On Time (min)',
          field: 'calories',
          sortable: true
        },
        { name: 'fat', label: 'Humidity before', field: 'fat', sortable: true },
        {
          name: 'carbs',
          label: 'Humidity after',
          field: 'carbs',
          sortable: true
        }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },
  computed: {
    changed() {
      return !_.isEqual(this.field, this.fieldInDB)
    }
  },

  methods: {
    fetchField() {
      this.fieldInDB = {
        title: 'title',
        area: 9,
        crop: 'wheat',
        plantedDate: new moment().format('YYYY/MM/DD')
      }
      this.fieldInDB.expectedDate = new moment(this.fieldInDB.plantedDate)
        .add(3, 'months')
        .format('YYYY/MM/DD')

      this.fieldInDB.expectedQuantity = 900

      this.field = _.clone(this.fieldInDB, true)
    },
    saveField() {
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'r_cloud_done',
        message: 'Saved!'
      })
      this.field.expectedDate = new moment(this.field.plantedDate)
        .add(3, 'months')
        .format('YYYY/MM/DD')
      this.fieldInDB = _.clone(this.field, true)
    },
    filterFn(val, update, abort) {
      if (this.options !== null) {
        // already loaded
        update()
        return
      }

      setTimeout(() => {
        update(() => {
          this.options = ['wheat', 'maize', 'rice', 'mango']
        })
      }, 2000)
    },

    abortFilterFn() {
      // console.log('delayed filter aborted')
    }
  },

  mounted() {
    this.fetchField()
  }
}
</script>
