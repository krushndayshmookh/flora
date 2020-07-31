<template>
  <q-page padding>
    <div>
      <img
        id="preview"
        ref="preview"
        :src="currentImage.src"
        width="224"
        height="224"
      />
    </div>

    <q-btn @click="saveModel">Save</q-btn>
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
      currentImage: {
        src: null
      },
      classifier: null,
      model: null,
      prediction: null,
      images: [
        {
          label: 'cat',
          src: '/images/retina/cat_white/1.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/2.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/3.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/4.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/5.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat1.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat2.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat3.jpg'
        },
        {
        label: 'cat',
          src: '/images/retina/cat_white/cat4.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat5.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat6.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat7.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat8.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat9.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat10.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat11.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat12.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat13.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat14.jpg'
        },
        {
          label: 'cat',
          src: '/images/retina/cat_white/cat15.jpg'
        },{
          label: 'cat',
          src: '/images/retina/cat_white/cat16.jpg'
        },{
          label: 'cat',
          src: '/images/retina/cat_white/cat17.jpg'
        },{
          label: 'cat',
          src: '/images/retina/cat_white/cat18.jpg'
        },{
          label: 'cat',
          src: '/images/retina/cat_white/cat19.jpg'
        },{
          label: 'cat',
          src: '/images/retina/cat_white/cat20.jpg'
        },



        {
          label: 'dog',
          src: '/images/retina/labrador_black/1.jpg'
        },
        {
          label: 'dog',
          src: '/images/retina/labrador_black/2.jpg'
        },
        {
          label: 'dog',
          src: '/images/retina/labrador_black/3.jpg'
        },
        {
          label: 'dog',
          src: '/images/retina/labrador_black/4.jpg'
        },
        {
          label: 'dog',
          src: '/images/retina/labrador_black/5.jpg'
        },
         {
          label: 'dog',
          src: '/images/retina/labrador_black/lab1.jpg'
        },
        {
          label: 'dog',
          src: '/images/retina/labrador_black/lab2.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab3.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab4.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab5.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab6.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab7.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab8.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab9.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab10.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab11.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab12.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab13.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab14.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab15.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab16.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab17.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab18.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab19.jpg'
        },{
          label: 'dog',
          src: '/images/retina/labrador_black/lab20.jpg'
        },
      ]
    }
  },

  async mounted() {
    this.createClassifier()
    await this.loadMobilenet()
    await this.startTraining()
  },

  async destroyed() {},

  methods: {
    async addClass(classId) {
      // Capture an image from the web camera.
      const img = await this.webcam.capture()

      // Get the intermediate activation of MobileNet 'conv_preds' and pass that
      // to the KNN classifier.

      // Pass the intermediate activation to the classifier.
      this.classifier.addExample(activation, classId)

      // Dispose the tensor to release the memory.
      img.dispose()
    },

    createClassifier() {
      console.log('Creating classifier..')
      this.classifier = knnClassifier.create()
      console.log('Successfully created')
    },

    async loadMobilenet() {
      console.log('Loading mobilenet..')

      this.model = await mobilenet.load(/* {
        // modelUrl: '/model.json'
      } */)
      console.log('Successfully loaded model')
    },

    async startTraining() {
      this.images.forEach(async (image, idx) => {
        this.currentImage = image
        const activation = this.model.infer(
          document.querySelector('#preview'),
          true
        )
        this.classifier.addExample(activation, image.label)

        console.log(idx + 1 + '/' + this.images.length)
      })
    },

    async saveModel() {
      const dataset = this.classifier.getClassifierDataset()

      const data = await Tensorset.stringify(dataset)

      localStorage.setItem('model_' + Date.now(), data)
    }
  }
}
</script>
