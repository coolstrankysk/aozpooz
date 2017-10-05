<template>
    <div id="app">
        <h1 class="text-center">{{ $t('icf_dial') }}</h1>

        <div class="animated fadeIn">
            <div id="step2" class="row">
                <div class="col-md-12">
                    <h2 class="text-center">{{ $t('step2.aasessed_components') }}</h2>

                    <h3 class="text-center">{{ academicDegree }} {{ name }} {{ surname }} {{ academicDegreeAfter }}</h3>

                    <div class="evaluated" v-if="selectedComponents.length">
                        <h3>{{ $t('step2.aasessed_components') }}</h3>

                        <div v-for="(selectedComponent, selectedComponentIndex) in selectedComponents">
                            {{ selectedComponent.scaleComponent.key }}{{ (selectedComponent.selectedScales[0].keys === 'Debariérizátor' || selectedComponent.selectedScales[0].keys === 'Facilitator') ? '+' : '.'
                            }}<span
                                v-for="(selectedScale, index) in selectedComponent.selectedScales">{{ selectedScale.key
                            }}</span> -
                            {{ selectedComponent.scaleComponent.component }} -
                            <span v-for="(selectedScale, index) in selectedComponent.selectedScales">
			        			{{ selectedScale.value }}
			        		</span>
                            <span class="glyphicon glyphicon-pencil text-warning"
                                  @click="editComponents(selectedComponentIndex)"
                                  aria-hidden="true"></span>
                            <span class="glyphicon glyphicon-remove text-danger"
                                  @click="removeComponents(selectedComponentIndex)"
                                  aria-hidden="true"></span>
                        </div>
                    </div>

                    <div id="components">
                        <label>
                            <h3>{{ $t('step2.choose_component') }}</h3>

                            <select class="form-control form-group"
                                    @input="editComponent">

                                <option value selected>{{ $t('step2.choose') }}</option>

                                <template v-for="(component, key) in $t('step2.components')[0]">
                                    <option v-if="selectedComponent.name"
                                            :selected="selectedComponent.name == key">{{ key }}
                                    </option>

                                    <option v-else>{{ key }}</option>
                                </template>
                            </select>
                        </label>

                        <label v-for="components in selectedComponent.components">
                            <h3 v-if="components[Object.keys(components)[0]] instanceof Object">{{ $t('step2.choose_category') }}</h3>
                            <h3 v-else>{{ $t('step2.choose_subcategory') }}</h3>

                            <select class="form-control form-group component"
                                    @input="editSelectedComponent">

                                <template v-for="(component, key) in components">
                                    <option v-if="component instanceof Object">{{ key }}</option>

                                    <option v-else :value="key">{{ key }}: {{ component }}</option>
                                </template>
                            </select>
                        </label>

                        <div class="scales" v-if="showScales"
                             v-for="(scales, keys) in selectedComponent.scales">

                            <div v-if="keys === 'Bariéra' || keys === 'Debariérizátor' || keys === 'Barrier' || keys === 'Facilitator'">
                                <h4>{{ keys }}</h4>

                                <div v-if="selectedComponent.selectedScales.length && editButton">
                                    <div v-for="(scale, key) in scales">
                                        <label>
                                            <input type="radio"
                                                   name="keys"
                                                   :value="scale"
                                                   :data-key="key"
                                                   :data-keys="keys"
                                                   @change="showSaveButton"> <strong>{{ scale }}</strong>
                                        </label>
                                    </div>
                                </div>

                                <div v-else>
                                    <div v-for="(scale, key) in scales">
                                        <label>
                                            <input type="radio"
                                                   name="keys"
                                                   :value="scale"
                                                   :data-key="key"
                                                   :data-keys="keys"
                                                   @change="showSaveButton"> <strong>{{ scale }}</strong>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div v-else>
                                <h4>{{ keys }}</h4>

                                <div v-if="selectedComponent.selectedScales.length && editButton">
                                    <div v-for="(scale, key) in scales">
                                        <label>
                                            <input type="radio"
                                                   :name="keys"
                                                   :value="scale"
                                                   :data-key="key"
                                                   :data-keys="keys"
                                                   @change="showSaveButton"> <strong>{{ scale }}</strong>
                                        </label>
                                    </div>
                                </div>

                                <div v-else>
                                    <div v-for="(scale, key) in scales">
                                        <label>
                                            <input type="radio"
                                                   :name="keys"
                                                   :value="scale"
                                                   :data-key="key"
                                                   :data-keys="keys"
                                                   @change="showSaveButton"> <strong>{{ scale }}</strong>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 well" v-if="selectedComponent.name">

                <input type="button"
                       value="Uložiť"
                       class="btn btn-success"
                       v-if="saveButton && !editButton"
                       @click="saveSelectedComponent">

                <input type="button"
                       value="Zmeniť"
                       class="btn btn-success"
                       v-if="editButton && showScales"
                       @click="saveComponent">

                <input type="button"
                       value="Zrušiť"
                       class="btn btn-danger"
                       @click="deleteSelectedComponent">


            </div>

            <div class="col-md-12 well">

                <router-link to="/step1" class="btn btn-primary">
                    {{ $t('back') }}
                </router-link>

                <router-link to="/step3" class="btn btn-primary pull-right">
                    {{ $t('next') }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  /* eslint-disable */
  import {mapState} from 'vuex'

  export default {
    name: 'step2',

    data () {
      return {
        selectedComponent: {
          name: '',
          scales: [],
          scaleComponent: {
            key: '',
            component: ''
          },
          selectedScales: [],
          components: [],
          selectedComponents: []
        },
        showScales: false,
        saveButton: false,
        editButton: false,
        key: null
      }
    },

    methods: {
      test () {
        console.log('test')
      },
      showSaveButton (e) {
        this.saveButton = true

        let key = _.findKey(this.selectedComponent.selectedScales, {name: e.target.name})

        if (key !== undefined) {
          this.selectedComponent.selectedScales.splice(key, 1)
        }

        this.selectedComponent.selectedScales.push({
          name: e.target.name,
          value: e.target.value,
          key: e.target.attributes['data-key'].value,
          keys: e.target.attributes['data-keys'].value
        })
      },

      deleteSelectedComponent () {
        this.resetSelectedComponent()
      },

      removeComponents (key) {
        this.$store.commit('spliceSelectedComponents', key)
      },

      saveSelectedComponent () {
        this.$store.commit('saveSelectedComponents', this.selectedComponent)

        this.saveButton = false

        this.showScales = false

        this.resetSelectedComponent()
      },

      resetSelectedComponent () {
        this.selectedComponent = {
          name: '',
          scales: [],
          scaleComponent: {
            key: '',
            component: ''
          },
          selectedScales: [],
          components: [],
          selectedComponents: []
        }
      },

      editComponents (key) {
        this.resetSelectedComponent()

        this.selectedComponent = this.selectedComponents[key]

        this.editButton = true

        this.showScales = true

        this.key = key
      },

      saveComponent () {
        this.$store.commit('updateSelectedComponents', {
          key: this.key,
          component: this.selectedComponent
        })

        this.editButton = false

        this.resetSelectedComponent()
      },

      editComponent (e) {
        let component = e.target.value

        this.selectedComponent.selectedComponents = []

        this.resetSelectedComponent()

        if (component) {
          this.selectedComponent.name = component

          this.selectedComponent.scales = this.$t('step2.components')[0][component].scales

          this.selectedComponent.components.push(this.$t('step2.components')[0][component].components)

          this.showScales = false

          this.saveButton = false

          setTimeout(function () {
            $('select').last().val('')
          }, 10)
        }
      },

      editSelectedComponent (e) {
        let component = e.target.value

        var components = this.selectedComponent.components

        if (component) {
          let key = _.findKey(components, component)

          if (key == 0) {
            components.splice(0 + 1)

            this.selectedComponent.selectedComponents.splice(0 + 1)
          }

          if (key == 1) {
            components.splice(1 + 1)

            this.selectedComponent.selectedComponents.splice(1 + 1)
          }

          if (components[components.length - 1][component].hasOwnProperty('components')) {
            components.push(components[components.length - 1][component].components)

            this.selectedComponent.selectedComponents.push(component)

            setTimeout(function () {
              $('select').last().val('')
            }, 10)
            this.showScales = false

            this.saveButton = false
          } else {
            this.showScales = true

            this.selectedComponent.scaleComponent = {
              key: component,
              component: components[components.length - 1][component]
            }
          }
        }
      }
    },

    computed: {
      ...mapState([
        'selectedComponents',
        'enComponents',
        'academicDegree',
        'name',

        'surname',
        'academicDegreeAfter'
      ])
    }
  }
</script>

<style scoped>
    .evaluated {
        margin-bottom: 10px;
    }

    .scales {
        margin-bottom: 15px;
    }

    label {
        width: 100%;
    }
</style>