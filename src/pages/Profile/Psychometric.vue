<template>
  <q-page padding>
    <div class="text-h4 q-mb-md text-center">Psychometric Test</div>

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <div class="column q-col-gutter-md">
          <q-input v-model="report.user.name" class="col" filled label="Name">
            <template v-slot:prepend>
              <q-icon name="account_circle"></q-icon>
            </template>
          </q-input>
          <q-input
            v-model="report.user.occupation"
            class="col"
            filled
            label="Occupation"
          >
            <template v-slot:prepend>
              <q-icon name="business"></q-icon>
            </template>
          </q-input>

          <div class="col">
            <q-list bordered separator="">
              <q-item v-for="(p, i) in report.problems" :key="i">
                <q-item-section>
                  <div class="text-h6 q-mb-md">{{ p.question }}</div>

                  <q-select
                    v-model="p.selectedOption.label"
                    filled
                    dense
                    label="Options"
                    :options="p.options.map(o => o.label)"
                  ></q-select>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col">
            <q-btn class="full-width" color="primary" label="Submit" icon-right="send"></q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      report: {
        _id: 0,
        user: {
          name: 'Krushn Dayshmookh',
          occupation: 'Farmer'
        },
        date: '3 August 2020',
        problems: [
          {
            question: 'Psycological evaluation question for sample.',
            options: [
              {
                label: 'option 1'
              },
              {
                label: 'option 2'
              },
              {
                label: 'option 3'
              },
              {
                label: 'option 4'
              }
            ],
            selectedOption: {
              label: 'option 3'
            }
          },
          {
            question: 'Psycological evaluation question for sample.',
            options: [
              {
                label: 'option 1'
              },
              {
                label: 'option 2'
              },
              {
                label: 'option 3'
              },
              {
                label: 'option 4'
              }
            ],
            selectedOption: {
              label: 'option 3'
            }
          },
          {
            question: 'Psycological evaluation question for sample.',
            options: [
              {
                label: 'option 1'
              },
              {
                label: 'option 2'
              },
              {
                label: 'option 3'
              },
              {
                label: 'option 4'
              }
            ],
            selectedOption: {
              label: 'option 3'
            }
          },
          {
            question: 'Psycological evaluation question for sample.',
            options: [
              {
                label: 'option 1'
              },
              {
                label: 'option 2'
              },
              {
                label: 'option 3'
              },
              {
                label: 'option 4'
              }
            ],
            selectedOption: {
              label: 'option 3'
            }
          },
          {
            question: 'Psycological evaluation question for sample.',
            options: [
              {
                label: 'option 1'
              },
              {
                label: 'option 2'
              },
              {
                label: 'option 3'
              },
              {
                label: 'option 4'
              }
            ],
            selectedOption: {
              label: 'option 3'
            }
          }
        ]
      }
    }
  }
}
</script>
