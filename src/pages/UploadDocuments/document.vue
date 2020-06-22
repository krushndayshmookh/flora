<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input label="Add Document name here!" rounded outlined v-model="text">
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="q-gutter-md row items-start">
      <div class="q-pa-md">
     <q-uploader
     label="Upload"
      url="http://localhost:4444/upload"
      dark
    />
  </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
