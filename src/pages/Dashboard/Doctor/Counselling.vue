<template>
  <q-page padding>
    <div class="text-h4 q-mb-md">Assessment Reports</div>

    <div class="row">
      <div class="col-12 col-md-6">
        <q-list bordered separator>
          <q-item
            v-for="report in reports"
            :key="report._id"
            v-ripple
            clickable
            @click="displayReport(report)"
          >
            <q-item-section>
              <div class="text-body1">{{ report.user.name }}</div>
              <div class="text-caption">{{ report.user.occupation }}</div>
            </q-item-section>

            <q-item-section side>
              <div class="text-caption">{{ report.date }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <q-dialog v-model="reportDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ selectedReport.user.name }}</div>
          <div class="text-subtitle">{{ selectedReport.user.occupation }}</div>
          <div class="text-caption">{{ selectedReport.date }}</div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <q-list v-if="selectedReport.problems" separator>
            <q-item
              v-for="(problem, idx) in selectedReport.problems"
              :key="idx"
              clickable
            >
              <q-item-section top>
                <div class="text-body1">
                  {{ problem.question }}
                </div>
              
                <ol>
                  <li v-for="(op, idx1) in problem.options" :key="idx1">
                    {{ op.label }}
                  </li>
                </ol>
              </q-item-section>
              <q-item-section side>
                {{ problem.selectedOption.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      reportDialog: false,

      selectedReport: {
        _id: 0,
        user: {
          name: 'Krushn Dayshmookh',
          occupation: 'Farmer'
        },
        date: '3 August 2020'
      },

      reports: [
        {
          _id: 0,
          user: {
            name: 'Krushn Dayshmookh',
            occupation: 'Farmer'
          },
          date: '3 August 2020',
          problems: [
            {
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
        },
        {
          _id: 1,
          user: {
            name: 'Vithika Jha',
            occupation: 'Farmer'
          },
          date: '3 August 2020',
          problems: [
            {
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
        },
        {
          _id: 2,
          user: {
            name: 'Kishor Baidya',
            occupation: 'Farmer'
          },
          date: '3 August 2020',
          problems: [
            {
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
        },
        {
          _id: 3,
          user: {
            name: 'Vithika Kapoor',
            occupation: 'Farmer'
          },
          date: '3 August 2020',
          problems: [
            {
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
              question: 'Psycological evaluation qustion for sample.',
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
      ]
    }
  },

  methods: {
    displayReport(report) {
      ;(this.selectedReport = report), (this.reportDialog = true)
    }
  }
}
</script>
