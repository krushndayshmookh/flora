  <template>
  <div class="q-gutter-md q-pa-md">
    
    
     <q-card class="my-card ">
      <img src="https://cdn.quasar.dev/img/parallax1.jpg">

      <q-card-section>
        <div class="text-h6">Tractors and Machines</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-section side class="q-pt-none">
       <q-btn clickableto="/pages/Marketplace/Seeds" v-ripple rounded color="primary" label="view" />

      </q-card-section>
     </q-card>
    
     
  
     <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/parallax1.jpg">

      <q-card-section>
        <div class="text-h6">Transport</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn v-ripple rounded color="primary" label="view" @click="toggleDialog(true)" />

      </q-card-section>
     </q-card>

     
  
     <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/parallax1.jpg">

      <q-card-section>
        <div class="text-h6">Tools and Chemicals</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn v-ripple rounded color="primary" label="view" @click="toggleDialog(true)" />

      </q-card-section>
     </q-card>
  
    
  
     <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/parallax1.jpg">

      <q-card-section>
        <div class="text-h6">Seeds</div>
        <!-- <div class="text-subtitle2">by John Doe</div> -->
      </q-card-section>

      <q-card-section class="q-pt-none">
         <!-- .q-px-md.q-my-md -->
      <q-btn v-ripple rounded color="primary" label="view" @click="toggleDialog(true)" />

      </q-card-section>
     </q-card>
  
    


  
  </div>

   



</template>


<script>
export default {
  // data () {
  //   return {
  //     lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   }
  // }
 methods: {
    toggleDialog(val) {
      this.fieldDialogOpen = val
    }
  }
}

</script>


<style lang="sass" scoped>
.my-card
 
  width: 100%
  max-width: 500px
</style>
