<template>
<q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
 
      <q-input rounded outlined v-model="text" placeholder="Search">
        <template v-slot:append>
          <q-avatar>
             <q-icon name="search" />
          </q-avatar>
        </template>
      </q-input>
                <q-separator /> 

      <q-card class=" q-my-md q-ml-md q-gutter-md" style="width:100%">
      <q-card-section class=" q-my-md q-ml-md"> 
           <q-input outlined standout="text-primary" v-model="text" label="Add a Question" :dense="dense" />
       </q-card-section>
            <q-btn  color="primary" icon="add" label="Add" />
                
            <q-btn  color="negative" icon="cancel" label="Cancel" />
                <q-separator /> 


       </q-card> 

       <q-card class=" q-my-md q-ml-md" style="width:100%">
      <q-card-section>
        <q-item>
           <q-item-section avatar>
            <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>
            Subhead
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ data }}
        </q-card-section>
              </q-card-section>
        </q-card-section>

       </q-card>

              <q-card class=" q-my-md q-ml-md" style="width:100%">
      <q-card-section>
        <q-item>
           <q-item-section avatar>
            <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>
            Subhead
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ data }}
        </q-card-section>
              </q-card-section>
        </q-card-section>

       </q-card>

              <q-card class=" q-my-md q-ml-md" style="width:100%">
      <q-card-section>
        <q-item>
           <q-item-section avatar>
            <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>
            Subhead
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ data }}
        </q-card-section>
              </q-card-section>
        </q-card-section>

       </q-card>

     

        
     
    


</div>
</q-page>
</template>



<script>
export default {
  data () {
    return {
        data:'kisan yojana'
    }
  }
}
</script>

