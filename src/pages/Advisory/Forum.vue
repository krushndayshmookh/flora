<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-md">
      <q-card class="q-my-md q-ml-md" style="width:100%">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
          <div class="absolute-bottom text-h6 text-center">FORUM</div>
        </q-img>

        <q-input class="q-pa-md" v-model="search" filled placeholder="Search" spinner-color="white">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card>

      <q-card class="q-my-md q-ml-md" style="width:100%">
        <q-card-section class="q-pa-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-input
            outlined
            standout="text-primary"
            v-model="text"
            label="Add a Question"
            :dense="dense"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" icon="add" label="Add" />

          <q-btn color="negative" icon="cancel" label="Cancel" />
        </q-card-actions>
        <q-separator />
      </q-card>

      <q-card class="q-my-md q-ml-md" style="width:100%">
        <q-card-section>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <q-card-section>{{ data }}</q-card-section>
          </q-card-section>
        </q-card-section>
        <q-card-actions horizontal class="justify-around q-px-md">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="comment" />
          <q-btn flat round color="primary" icon="bookmark" />
        </q-card-actions>
      </q-card>

      <q-card class="q-my-md q-ml-md" style="width:100%">
        <q-card-section>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <q-card-section>{{ data }}</q-card-section>
          </q-card-section>
        </q-card-section>
        <q-card-actions horizontal class="justify-around q-px-md">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="comment" />
          <q-btn flat round color="primary" icon="bookmark" />
        </q-card-actions>
      </q-card>

      <q-card class="q-my-md q-ml-md" style="width:100%">
        <q-card-section>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-card-section horizontal>
            <q-card-section>{{ data }}</q-card-section>
          </q-card-section>
        </q-card-section>
        <q-card-actions horizontal class="justify-around q-px-md">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="comment" />
          <q-btn flat round color="primary" icon="bookmark" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>



<script>
export default {
  data() {
    return {
      data: 'Pradhan Mantri Kisan Samman Nidhi is an initiative by the government of India in which all farmers will get up to ₹6,000 per year as minimum income support. The initiative was announced by Piyush Goyal during the 2019 Interim Union Budget of India on 1 February 2019.'
    }
  }
}
</script>

