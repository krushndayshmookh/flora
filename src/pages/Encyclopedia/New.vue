<template>
  <q-page padding="">
    <q-editor v-model="editor" height="80vh" ref="editor"/>
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
  methods: {
  },
  mounted(){
    console.log(this.$refs.editor)

  }
}
</script>
