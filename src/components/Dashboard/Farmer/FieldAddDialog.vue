<template lang="pug">
  q-dialog(v-model="show")
    q-card
      q-card-section
        .text-h6 Add new field
      q-card-section.q-pt-none
        q-form.q-gutter-md(@submit="onSubmit" @reset="onReset")

          q-input(outlined v-model="field.title" placeholder="Title" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']")
          q-input(outlined type="number" v-model="field.area" placeholder="Area" lazy-rules suffix="acres" :rules="[\
          val => val !== null && val !== '' || 'Please enter area',\
          val => val > 0 && val < 10000 || 'Please type a real area'\
          ]")

          div
            q-btn(label="Add" type="submit" color="primary")
            q-btn.q-ml-sm(label="cancel" type="reset" color="primary" flat)

</template>

<script>
export default {
  name: 'FieldAddDialog',
  props: ['value'],
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
  data() {
    return {
      name: null,
      age: null,

      accept: false,
      field: {
        title: null,
        area: null
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
    }
  }
}
</script>
