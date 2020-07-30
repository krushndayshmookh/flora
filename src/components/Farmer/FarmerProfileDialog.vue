<template lang="pug">
q-dialog(v-model="show")
    q-card(q-mb-xl)
        q-card-section
            .text-h6 Add New Field Details
        q-card-section.q-pt-none
            q-form.q-gutter-md(@submit="onSubmit" @reset="onReset")
                div(class='q-gutter-md row items-start field-block') 
                    q-input(v-slot:prepend color="teal"  v-model="field.title" placeholder="Name" class="q-mb-md" type="text" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="person" )
                    q-input(v-slot:prepend color="teal"  v-model="field.age" placeholder="Age" class="q-mb-md" type="text" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="eco" )
                    q-input(v-slot:prepend color="teal"  v-model="field.gender" placeholder="Gender" class="q-mb-md" type="text" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="wc" )
                    q-input(v-slot:prepend color="teal"  v-model="field.aadhar" placeholder="Aadhar Number" class="q-mb-md" type="text" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="payment" )
                    q-input(v-slot:prepend color="teal"   type="number" v-model="field.exprience" placeholder="Farming Expirience" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="work" )
                    q-input(v-slot:prepend color="teal"  type="number" v-model="field.area" placeholder="Farm Acers" lazy-rules :rules="[\
                    val => val !== null && val !== '' || 'Please enter area',\
                    val => val > 0 && val < 10000 || 'Please type a real area'\
                    ]")
                        q-icon( style="margin-right:25px" name="mail" )
                    q-input(v-slot:prepend color="teal" filled v-model="field.rarea" placeholder="Residential Area" class="q-mb-md" type="textarea"  style="min-width: 500px" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="home" )
                    q-input(v-slot:prepend color="teal" filled  v-model="field.farea" placeholder="Farm Area" class="q-mb-md" type="textarea" style="min-width: 500px" lazy-rules   :rules="[ val => val && val.length > 0 || 'Please type something']")
                        q-icon( style="margin-right:25px" name="home" )
                    q-input(@input="val => { file = val[0] }" filled  type="file" hint="Farm Map (7/12)")
                    div
                        q-btn(label="Add" type="submit" color="primary")
                        q-btn.q-ml-sm(label="cancel" type="reset" color="primary" flat)
</template>

<script>
export default {
  name: 'FieldAddDialog',

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      field: {
        title: null,
        area: null,
        name: null,
        age: null,
        gender: null,
        farea: null,
        rarea: null,
        aadhar: null,
        exprience: null,
        accept: false
      }
    }
  },

  computed: {
    show: {
      get() {
        return this.value
      },
      set(opened) {
        this.$emit('change', opened)
      }
    }
  },

  methods: {
    onSubmit() {
      this.$q.notify({
        color: 'green-5',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Created!'
      })
      this.show = false
    },

    onReset() {
      this.field.field = null
      this.field.area = null
      this.show = false
    }
  }
}
</script>

<style scoped>
.field-block {
  min-width: '600vh';
}
</style>
