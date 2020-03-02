<template lang="pug">
  q-page.q-pa-md
    q-card
      q-card-section
        .row
          .col
            div.text-weight-light.q-px-sm.q-my-sm.text-h3.underlined {{ field.title }}
              q-popup-edit(:cover="false" v-model="field.title" title="Edit the Title" auto-save)
                q-input(outlined v-model="field.title" dense autofocus)


            h5.text-weight-light.q-px-sm.q-my-sm.underlined Area: {{ field.area }} acres
              q-popup-edit(:cover="false" v-model="field.area" title="Edit the Area" auto-save)
                q-input(outlined v-model="field.area" dense autofocus)


          .col-auto
            q-btn(color="green" label="Save" v-if="changed" @click="saveField")

    q-card.q-mt-md
      q-card-section
        h5.text-weight-light.q-px-sm.q-my-sm.underlined Crop: {{ field.crop }}
          q-popup-edit(:cover="false" v-model="field.crop" title="Edit the Crop" auto-save)
            q-select(outlined dense v-model="field.crop" :options="options" @filter="filterFn" @filter-abort="abortFilterFn" style="width: 250px")
              template(v-slot:no-option)
                q-item
                  q-item-section.text-grey
                    | No results


        h5.text-weight-light.q-px-sm.q-my-sm.underlined Planted on: {{ field.plantedDate }}
          q-popup-edit(:cover="false" v-model="field.plantedDate" title="Edit the planted date" auto-save mask="date" :rules="['date']")
            q-input(outlined v-model="field.plantedDate" mask="date" :rules="['date']" dense autofocus)
              template(v-slot:append)
                q-icon.cursor-pointer(name="event")
                  q-popup-proxy(ref="qDateProxy" transition-show="scale" transition-hide="scale")
                    q-date(v-model="field.plantedDate" @input="() => $refs.qDateProxy.hide()")

        h5.text-weight-light.q-px-sm.q-my-sm Expected on: {{ field.expectedDate }}

        h5.text-weight-light.q-px-sm.q-my-sm Expected quantity: {{ field.plantedDate }} kg



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
      options: null
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

      this.field = _.clone(this.fieldInDB, true)
    },
    saveField() {
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Saved!'
      })
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
