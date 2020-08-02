<template>
  <q-page padding>
    <div class="q-col-gutter-md">
      <div class="col">
        <q-card>
          <q-img src="images/baner-3.png" basic>
            <div class="absolute-bottom text-h6 text-center">FORUM</div>
          </q-img>

          <q-card-section>
            <q-input
              v-model="searchQuery"
              filled
              placeholder="Search"
              spinner-color="white"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>

      <div class="col">
        <q-card>
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

            <q-input
              v-model="question"
              outlined
              standout="text-primary"
              label="Add a Question"
              dense
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="primary" icon="add" label="Add" />

            <q-btn color="negative" icon="cancel" label="Cancel" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col">
        <q-card>
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
            <q-btn v-model="expanded" flat round color="accent" icon="comment" />
            <q-btn flat round color="primary" icon="bookmark" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: null,
      question: null,
      data:
        'Pradhan Mantri Kisan Samman Nidhi is an initiative by the government of India in which all farmers will get up to ₹6,000 per year as minimum income support. The initiative was announced by Piyush Goyal during the 2019 Interim Union Budget of India on 1 February 2019.'
    }
  }
}
</script>
