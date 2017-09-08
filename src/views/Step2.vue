<template>
    <div id="app">
        <h1 class="text-center">ICF číselník</h1>

        <div class="animated fadeIn">
            <div id="step2" class="row">
                <div class="col-md-12">
                    <h2 class="text-center">Posudzované komponenty</h2>

                    <h3 class="text-center">{{ academicDegree }} {{ name }} {{ surname }} {{ academicDegreeAfter }}</h3>

                    <div class="evaluated" v-if="selectedComponents.length">
                        <h3>Posúdené poruchy</h3>

                        <div v-for="(selectedComponent, selectedComponentIndex) in selectedComponents">
                            {{ selectedComponent.scaleComponent.key }}.{{ selectedComponent.selectedScales[0].key }} -
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
                        <h3 v-if="selectedComponent.name">{{ selectedComponent.name }}</h3>

                        <select class="form-control form-group"
                                @input="editComponent">

                            <option value selected>Vyberte</option>

                            <template v-for="(component, key) in components">
                                <option v-if="selectedComponent.name"
                                        :selected="selectedComponent.name == key">{{ key }}
                                </option>

                                <option v-else>{{ key }}</option>
                            </template>
                        </select>

                        <select class="form-control form-group component"
                                v-for="components in selectedComponent.components"
                                @input="editSelectedComponent">

                            <template v-for="(component, key) in components">
                                <option v-if="component instanceof Object">{{ key }}</option>

                                <option v-else :value="key">{{ key }}: {{ component }}</option>
                            </template>
                        </select>

                        <div v-if="showScales"
                             v-for="(scales, keys) in selectedComponent.scales">

                            <h4>{{ keys }}</h4>

                            <div v-if="selectedComponent.selectedScales.length && editButton">
                                <div v-for="(scale, key) in scales">
                                    <input type="radio"
                                           :name="keys"
                                           :value="scale"
                                           :data-key="key"
                                           @change="showSaveButton"> <strong>{{ scale }}</strong>
                                </div>
                            </div>

                            <div v-else>
                                <div v-for="(scale, key) in scales">
                                    <input type="radio"
                                           :name="keys"
                                           :value="scale"
                                           :data-key="key"
                                           @change="showSaveButton"> <strong>{{ scale }}</strong>
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
                    Späť
                </router-link>

                <router-link to="/step3" class="btn btn-primary pull-right">
                    Ďalej
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  /* eslint-disable */
  import { mapState } from 'vuex'

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
      showSaveButton (e) {
        this.saveButton = true

        let key = _.findKey(this.selectedComponent.selectedScales, {name: e.target.name})

        if (key !== undefined) {
          this.selectedComponent.selectedScales.splice(key, 1)
        }

        this.selectedComponent.selectedScales.push({
          name: e.target.name,
          value: e.target.value,
          key: e.target.attributes['data-key'].value
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

          this.selectedComponent.scales = this.components[component].scales

          this.selectedComponent.components.push(this.components[component].components)

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
        'components',
        'academicDegree',
        'name',
        'surname',
        'academicDegreeAfter'
      ])
    }
  }
</script>