<template>
  <q-page padding="">
    <q-editor ref="editor" v-model="editor" height="80vh"/>
  </q-page>
</template>

<script>
export default {
  name: 'EncyclopediaNew',
  components: {},
  data() {
    return {
        editor: ''
    }
  },
  mounted(){
    console.log(this.$refs.editor)

  },
  methods: {
  }
}
</script>
