<template lang="pug">
  q-page
    //-  q-card.q-ma-md.q-mt-md
    q-tabs.text-primary(v-model="tab"  inline-label narrow-indicator  align="justify")
      q-tab(name="info" icon="info" :label="tab=='info' ? 'Info': ''")
      q-tab(name="water" icon="opacity" :label="tab=='water' ? 'Water': ''")
      q-tab(name="fertilizer" icon="science" :label="tab=='fertilizer' ? 'Fertilizer': ''")
      q-tab(name="activity" icon="agriculture" :label="tab=='activity' ? 'Activity': ''")

    q-separator

    q-tab-panels(v-model="tab" animated swipeable)
      q-tab-panel.q-pa-none(name="info")
        q-card-section
          .text-h5 {{ field.title }}

        q-separator
        
        q-card-section.q-pa-none
          q-stepper(flat v-model="cultivationStep" vertical color="primary" animated)
            q-step(:name="-1" title="Plant a crop" icon="settings" :done="cultivationStep > -1")
              | Choose a crop from most profitable crops in your area or cultivate an incentivized crop.
              q-stepper-navigation
                q-btn(@click="cropStage = 'planted'" color="primary" label="Plant")
            q-step(:name="0" title="Harvest Field" icon="settings" :done="cultivationStep > 0")
              q-stepper-navigation
                q-btn(@click="cropStage = 'harvested'" color="primary" label="Harvest")
            q-step(:name="1" title="Sell it" icon="settings" :done="cultivationStep > 1")
              q-stepper-navigation
                q-btn(@click="cropStage = 'procured'" color="primary" label="Finish")
            q-step(:name="2" title="Done" icon="settings" :done="cultivationStep > 2")
              q-stepper-navigation
                //- q-btn(@click="cropStage = 'procured'" color="primary" label="Finish")





        q-separator

        q-card-section.q-pa-none
          q-list
            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="open_with")
              q-item-section
                q-item-label {{ field.area || 0 }}  acres
              q-item-section(side)
                q-item-label(caption) Area
            
            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="eco")
              q-item-section
                q-item-label {{ field.crop }}
              q-item-section(side)
                q-item-label(caption) Crop

            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="today")
              q-item-section
                q-item-label {{ field.plantedDate }}
              q-item-section(side)
                q-item-label(caption) Planted on

            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="event")
              q-item-section
                q-item-label {{ field.expectedDate }}
              q-item-section(side)
                q-item-label(caption) Expected on

            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="widgets")
              q-item-section
                q-item-label {{ field.expectedQuantity || 0 }} kg
              q-item-section(side)
                q-item-label(caption) Expected Quantity

            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="event_available")
              q-item-section
                q-item-label {{ field.harvestedDate }}
              q-item-section(side)
                q-item-label(caption) Harvested on

            q-item(v-ripple)
              q-item-section(avatar)
                q-icon(color="primary" name="category")
              q-item-section
                q-item-label {{ field.harvestedQuantity || 0 }} kg
              q-item-section(side)
                q-item-label(caption) Harvested Quantity

        q-page-sticky(position="bottom-right" :offset="[18, 18]")
          q-fab(v-model="fab1" external-label color="purple" icon="keyboard_arrow_up" direction="up")
            q-fab-action(external-label label-position="left" color="blue" @click="editField" icon="edit" label="Edit Field Details")
            q-fab-action(external-label label-position="left" color="secondary" @click="editCrop" icon="spa" label="Edit Crop Details")
            q-fab-action(external-label label-position="left" color="secondary" @click="plantCrop" icon="spa" label="Plant a Crop")
            q-fab-action(external-label label-position="left" color="orange" @click="harvestCrop" icon="agriculture" label="Harvest Crop")


        //- q-card-section.q-pt-none
          //- h5.text-weight-light.q-my-sm Crop: {{ ' ' }}
            span.underlined 
              q-popup-edit(:cover="false" v-model="field.crop" title="Edit the Crop" auto-save)
                q-select(outlined dense v-model="field.crop" :options="options" @filter="filterFn" @filter-abort="abortFilterFn" style="width: 250px")
                  template(v-slot:no-option)
                    q-item
                      q-item-section.text-grey
                        | No results


          //- h5.text-weight-light.q-my-sm Planted on: {{ ' ' }}
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
        q-dialog(v-model="editDialog" position="bottom")
          FieldEditDialog(:field="field" @done="handleEditDone")
        
      q-tab-panel.q-pa-none(name="water")
        //- q-card-section
          .text-h6 Water Record

        q-card-section.q-pa-none
          FieldWaterTimeline(:events="waterRecord")
        
        q-page-sticky.btn(position="bottom-right" :offset="[18, 18]")
          q-btn(fab icon="add" color="primary")

      q-tab-panel.q-pa-none(name="fertilizer")
        //- q-card-section
          .text-h6 Fertilizer Record

        q-card-section.q-pa-none
          FieldFertilizerTimeline(:events="fertilizerRecord")
        
        q-page-sticky.btn(position="bottom-right" :offset="[18, 18]")
          q-btn(fab icon="add" color="primary")

      q-tab-panel.q-pa-none(name="activity")
        q-card-section
          .text-h6 Activity Record

        q-card-section.q-pa-none
          q-table(:data="data" :columns="columns" flat row-key="name")
        
        q-page-sticky.btn(position="bottom-right" :offset="[18, 18]")
          q-btn(fab icon="add" color="primary")


</template>

<script>
import _ from 'lodash'
import moment from 'moment'

import FieldWaterTimeline from 'components/Farmer/FieldWaterTimeline'
import FieldFertilizerTimeline from 'components/Farmer/FieldFertilizerTimeline'
import FieldEditDialog from 'components/Farmer/FieldEditDialog.vue'

export default {
  name: 'DashboardFarmerField',

  components: {
    FieldWaterTimeline,
    FieldFertilizerTimeline,
    FieldEditDialog
  },

  data() {
    return {
      fab1: false,

      editDialog: false,

      field: {
        title: '',
        area: 0,
        crop: '',
        plantedDate: ''
      },

      cropStage: '',

      waterRecord: [
        {
          _id: 0
        },
        {
          _id: 1
        },
        {
          _id: 2
        },
        {
          _id: 3
        }
      ],

      fertilizerRecord: [
        {
          _id: 0
        },
        {
          _id: 1
        },
        {
          _id: 2
        },
        {
          _id: 3
        }
      ],

      fieldInDB: null,
      options: null,
      tab: 'info',
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
    },

    cultivationStep() {
      const stages = ['planted', 'harvested', 'procured']
      const stage = this.cropStage
      return stages.indexOf(stage)
    }
  },

  mounted() {
    this.fetchField()
  },

  methods: {
    fetchField() {
      this.fieldInDB = {
        title: 'title',
        area: 9,
        crop: 'wheat',
        plantedDate: new moment().format('D MMM, YYYY')
      }
      this.fieldInDB.expectedDate = new moment(this.fieldInDB.plantedDate)
        .add(3, 'months')
        .format('D MMM, YYYY')

      this.fieldInDB.harvestedDate = new moment(this.fieldInDB.plantedDate)
        .add(3, 'months')
        .add(3, 'days')
        .format('D MMM, YYYY')

      this.fieldInDB.expectedQuantity = 900
      this.fieldInDB.harvestedQuantity = 900 + 5

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
        .format('D MMM, YYYY')
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
    },

    editField() {
      this.editDialog = true
    },

    editCrop() {
      // this.editDialog = true
    },
    plantCrop() {
      // this.editDialog = true
    },
    harvestCrop() {
      // this.editDialog = true
    },

    hideEditDialog() {
      this.editDialog = false
    },

    handleEditDone() {
      this.hideEditDialog()
    }
  }
}
</script>
