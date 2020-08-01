<template>
  <q-page padding>
    <div>
      {{ prediction }}
    </div>
    <div>
      <video
        ref="webcam"
        autoplay
        playsinline
        muted
        width="224"
        height="224"
      ></video>
    </div>
    <div>
      <q-btn @click="addClass(0)">Add A</q-btn>
      <q-btn @click="addClass(1)">Add B</q-btn>
      <q-btn @click="addClass(2)">Add C</q-btn>
    </div>

    <div>
      <q-btn color="primary" @click="saveModel">Save Model</q-btn>
    </div>
  </q-page>
</template>

<script>
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as knnClassifier from '@tensorflow-models/knn-classifier'
import Tensorset from 'tensorset'

export default {
  data() {
    return {
      webcam: null,
      classifier: null,
      model: null,
      prediction: null
    }
  },

  async mounted() {
    this.createClassifier()
    await this.loadMobilenet()
    await this.startWebcam()

    this.startClassifier()
  },

  async destroyed() {
    console.log(this.webcam)
    this.webcam.stop()
    this.webcam.stream.getTracks().forEach(function(track) {
      track.stop()
    })
  },

  methods: {
    async addClass(classId) {
      // Capture an image from the web camera.
      const img = await this.webcam.capture()

      // Get the intermediate activation of MobileNet 'conv_preds' and pass that
      // to the KNN classifier.
      const activation = this.model.infer(img, true)

      // Pass the intermediate activation to the classifier.
      this.classifier.addExample(activation, classId)

      // Dispose the tensor to release the memory.
      img.dispose()
    },

    createClassifier() {
      this.classifier = knnClassifier.create()
    },

    async loadMobilenet() {
      console.log('Loading mobilenet..')

      // Load the model.
      this.model = await mobilenet.load()
      console.log('Successfully loaded model')
    },

    async startWebcam() {
      // Create an object from Tensorflow.js data API which could capture image
      // from the web camera as Tensor.
      this.webcam = await tf.data.webcam(this.$refs.webcam)
    },

    async startClassifier() {
      while (true) {
        if (this.classifier.getNumClasses() > 0) {
          const img = await this.webcam.capture()

          // Get the activation from mobilenet from the webcam.
          const activation = this.model.infer(img, 'conv_preds')
          // Get the most likely class and confidence from the classifier module.
          const result = await this.classifier.predictClass(activation)

          const classes = ['AA variegated loquat (Eriobotrya japonica) that could be mistaken for a disease', 'Spores on the underside of fern leaves can sometimes be confused with insects', 'A chrysanthemum showing necrotic tissue','Shot-hole fungus on Prunus sp','Scorched dogwood (Cornus sp.) leaves']
          this.prediction = `
            prediction: ${classes[result.label]}\n
            probability: ${result.confidences[result.label]}
            `

          // Dispose the tensor to release the memory.
          img.dispose()
        }

        await tf.nextFrame()
      }
    },

    async saveModel() {
      const dataset = this.classifier.getClassifierDataset()

      const data = await Tensorset.stringify(dataset)

      localStorage.setItem('model', data)

      // await this.model.save('downloads://my-model')

      // console.log(data)
    }
  }
}
</script>
