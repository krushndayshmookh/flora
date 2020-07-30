<template lang="pug">
  q-page(padding)
    h4.text-weight-light.q-px-md.q-my-sm.text-center Disease Detection
    .q-px-md.q-my-sm
      q-btn.fit(color="primary" label="Get Picture" @click="captureImage")
    .q-my-sm.text-center
      video(ref="preview" autoplay="true")

      q-img(:src="capturedImage" width="300px" height="300px")
    
</template>

<script>
// import { Plugins, CameraResultType } from '@capacitor/core'

// const { Camera } = Plugins

async function getMediaStream(constraints) {
  return new Promise(function(resolve, reject) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => resolve(stream))
        .catch(err => reject(err))
    } else {
      const getUserMedia =
        navigator.getUserMedia ||
        navigator['webkitGetUserMedia'] ||
        navigator['mozGetUserMedia'] ||
        navigator['msGetUserMedia']
      getUserMedia(
        constraints,
        stream => resolve(stream),
        err => reject(err)
      )
    }
  })
}

export default {
  data() {
    return {
      // previewVideo: ''
      imageCapture: null,
      capturedImage: null,
      mediaStream: null,
      videoTrack: null
    }
  },

  mounted() {
    this.startPreview()
  },

  destroyed() {
    this.stopPreview()
  },

  methods: {
    // async captureImage() {
    //   const image = await Camera.getPhoto({
    //     quality: 90,
    //     allowEditing: true,
    //     resultType: CameraResultType.Uri
    //   })
    //   // image.webPath will contain a path that can be set as an image src.
    //   // You can access the original file using image.path, which can be
    //   // passed to the Filesystem API to read the raw data of the image,
    //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //   this.imageSrc = image.webPath
    // }

    startPreview() {
      // var video = this.$refs.previewVideo
      const vm = this
      getMediaStream({
        video: {
          width: 300,
          height: 300,
          facingMode: 'environment'
        }
      })
        .then(function(mediaStream) {
          vm.mediaStream = mediaStream
          vm.$refs.preview.srcObject = vm.mediaStream
          vm.videoTrack = mediaStream.getVideoTracks()[0]
          vm.imageCapture = new ImageCapture(vm.videoTrack)
        })
        .catch(function(err) {
          console.log('Something went wrong!')
          console.error(err)
        })
    },

    stopPreview() {
      this.mediaStream.getTracks().forEach(function(track) {
        track.stop()
      })
    },
    captureImage() {
      this.imageCapture
        .takePhoto()
        .then(blob => {
          this.capturedImage = URL.createObjectURL(blob)
        })
        .catch(function(err) {
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#captureBtn {
  min-height: 300px;
}

video {
  width: 300px;
  height: 300px;
  border: 1px solid blue;
}
</style>
