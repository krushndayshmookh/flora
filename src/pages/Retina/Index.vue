<template lang="pug">
  q-page(padding)
    h4.text-weight-light.q-px-md.q-my-sm.text-center Disease Detection
    .q-my-sm.text-center
      video(ref="webcam" autoplay playsinline muted width="400" height="400")
    .q-my-sm

      q-card
        q-card-section
          .text-h6 Results
        q-card-section.q-py-none
          .text-body1 {{ result.label }}
          .text-caption Confidence: {{ result.confidence*100 }} %
        q-card-section
          q-btn(color="primary" label="More info" icon="info")

      //- p.text-center(v-for="(p,i) in prediction") {{ p }}    
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
      prediction: null,
      classifierStarted: false,

      labels: [
        'A variegated loquat (Eriobotrya japonica) that could be mistaken for a disease',
        'Spores on the underside of fern leaves can sometimes be confused with insects',
        'A chrysanthemum showing necrotic tissue',
        'Shot-hole fungus on Prunus sp',
        'Scorched dogwood (Cornus sp.) leaves'
      ],

      result: {
        label: '',
        confidence: 0
      }
    }
  },

  async mounted() {
    this.createClassifier()
    await this.loadMobilenet()
    await this.loadClassifierDataset()
    await this.startWebcam()
    this.startClassifier()
  },

  async destroyed() {
    this.stopClassifier()
    this.stopWebcam()
  },

  methods: {
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
      this.classifierStarted = true
      while (this.classifierStarted) {
        if (this.classifier.getNumClasses() > 0) {
          const img = await this.webcam.capture()

          // Get the activation from mobilenet from the webcam.
          const activation = this.model.infer(img, 'conv_preds')
          // Get the most likely class and confidence from the classifier module.
          const result = await this.classifier.predictClass(activation)

          // console.log(activation)
          // console.log(result)

          this.result = {
            label: this.labels[result.label],
            confidence: result.confidences[result.label]
          }

          this.prediction = []
          Object.keys(result.confidences).forEach(k => {
            this.prediction.push(`${this.labels[k]} = ${result.confidences[k]}`)
          })

          // Dispose the tensor to release the memory.
          img.dispose()
        }

        await tf.nextFrame()
      }
    },

    async stopWebcam() {
      this.webcam.stop()
      this.webcam.stream.getTracks().forEach(function(track) {
        track.stop()
      })
    },

    async stopClassifier() {
      this.classifierStarted = false
    },

    async loadClassifierDataset() {
      // const data = localStorage.getItem('model')
      const { data } = await this.$axios.get('/dataset.json')

      const dataset = await Tensorset.parse(JSON.stringify(data))
      this.classifier.setClassifierDataset(dataset)
    }
  }
}
</script>

<style lang="scss" scoped>
video {
  width: 75vmin;
  height: 75vmin;
  // border: 1px solid blue;
}
</style>
