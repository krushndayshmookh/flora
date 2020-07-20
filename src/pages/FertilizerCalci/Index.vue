<template>
  <q-page padding>
    <div class="q-col-gutter-md">
      <div class="col">
        <q-card>
          <q-img
            src="https://www.letsnurture.com/wp-content/uploads/2019/01/Smart-farming-LetsNurture.jpg"
            basic
          >
            <div class="absolute-bottom text-h6 text-center">Fertilizer Calculator</div>
          </q-img>
        </q-card>
        <q-stepper v-model="step" vertical color="primary" animated>
          <q-step :name="1" title="Select Crop Type" icon="crop" :done="step > 1">
            <div class="column" style="height: 150px padding: 10px 15px">
              Start by selecting the type of crop on which you want to perform the fertilization calculations.
              <br />
            </div>
            <br />
            <p>Select from each column</p>
            <div class="q-gutter-sm">
              <q-btn outline color="teal" label="Button" />
              <q-btn outline color="teal" label="Button" />
              <br />
              <q-btn outline color="teal" label="Button" />
              <q-btn outline color="teal" label="Button" />
            </div>

            <q-stepper-navigation>
              <q-btn @click="step = 2" color="primary" label="Continue" />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="2" title="Select Crop" icon="create_new_folder" :done="step > 2">
            Now click on the drop-down menu to select the specific crop that we are going to work on.
            <br />

            <q-select standout="bg-white text-black" :options="options" label="Choose a crop" />

            <q-stepper-navigation>
              <q-btn @click="step = 3" color="primary" label="Continue" />
              <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="3" title="Region" icon="assignment" :done="step >3">
            It is important to know where the farm is located. Please select the region where your land is located from the drop-down menu
            <q-select standout="bg-white text-black" :options="options" label="Choose a region" />

            <q-stepper-navigation>
              <q-btn @click="step = 4" color="primary" label="Continue" />
              <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>

          <q-step :name="4" title="Area of Farm" icon="add_comment">
            Select area of farm
            <br />

            <q-input outlined v-model="text" label="Area" />

            <q-stepper-navigation>
              <q-btn color="primary" label="Finish" />
              <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>


<script>
export default {
  data() {
    return {
      step: 1,

      options: [
        'Rice',
        'Wheat',
        'Sugarcane',
        'Bajra',
        'Cotton',
        'Jute',
        'Cocunut'
      ]
    }
  }
}
</script>