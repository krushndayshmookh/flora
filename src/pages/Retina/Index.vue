<template lang="pug">
  q-page.q-pa-md
    h4.text-weight-light.q-px-md.q-my-sm Disease Detection
    .q-px-md.q-my-sm
      q-btn(color="primary" label="Get Picture" @click="captureImage")
    .q-px-md.q-my-sm
      img(:src="imageSrc")
</template>

<script>
import { Plugins, CameraResultType } from '@capacitor/core'

const { Camera } = Plugins

export default {
  data() {
    return {
      imageSrc: ''
    }
  },
  methods: {
    async captureImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      })
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.imageSrc = image.webPath
    }
  }
}
</script>
