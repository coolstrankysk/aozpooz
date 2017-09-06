<template>
    <div id="app">
        <h1 class="text-center">ICF číselník</h1>

        <div class="animated fadeIn">
            <div id="step1" class="row">
                <div class="col-md-12">
                    <h2 class="text-center">Identifikačné údaje o posudzovanej osobe</h2>

                    <h3 class="text-center">{{ academicDegree }} {{ name }} {{ surname }} {{ academicDegreeAfter }}</h3>

                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <form class="panel panel-default" data-vv-scope="form-1">
                            <div class="panel-heading has-error" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        Osobné údaje
                                    </a>

                                    <label v-if="form1Error" class="control-label pull-right">Vyplňte prosím všetky povinné políčka</label>
                                </h4>
                            </div>

                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                 aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <div class="form-group row">
                                        <div class="col-md-3">
                                            <label for="academicDegree">Titul pred menom</label>

                                            <select id="academicDegree"
                                                    name="academicDegree"
                                                    class="form-control"
                                                    @input="updateState">

                                                <option v-for="academicDegree in academicDegrees"
                                                        :value="academicDegree.value">{{ academicDegree.text }}
                                                </option>
                                            </select>
                                        </div>

                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.name') }">
                                            <label for="name" class="control-label">Meno <b>*</b></label>

                                            <input id="name"
                                                   name="name"
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Napíšte meno"
                                                   required
                                                   aria-required="true"
                                                   v-model="name"
                                                   v-validate="'required'"
                                                   @input="updateState">
                                        </div>

                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.surname') }">
                                            <label for="surname" class="control-label">Priezvisko <b>*</b></label>

                                            <input id="surname"
                                                   name="surname"
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Napíšte priezvisko"
                                                   required
                                                   aria-required="true"
                                                   :value="surname"
                                                   v-validate="'required'"
                                                   @input="updateState">
                                        </div>

                                        <div class="col-md-3">
                                            <label for="academicDegreeAfter">Titul za menom</label>

                                            <select id="academicDegreeAfter"
                                                    name="academicDegreeAfter"
                                                    class="form-control"
                                                    @input="updateState">

                                                <option v-for="academicDegreeAfter in academicDegreesAfter"
                                                        :value="academicDegreeAfter.value">{{ academicDegreeAfter.text
                                                    }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.birthDate') }">
                                            <label for="birthDate"
                                                   class="control-label">Dátum narodenia <b>*</b></label>

                                            <input type="date"
                                                   id="birthDate"
                                                   name="birthDate"
                                                   class="form-control"
                                                   required
                                                   aria-required="true"
                                                   :value="birthDate"
                                                   v-validate="'required'"
                                                   @input="updateState">
                                        </div>

                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.birthPlace') }">
                                            <label for="birthPlace"
                                                   class="control-label">Miesto narodenia <b>*</b></label>

                                            <input type="text"
                                                   id="birthPlace"
                                                   name="birthPlace"
                                                   class="form-control"
                                                   placeholder="Napíšte mesto"
                                                   required
                                                   aria-required="true"
                                                   :value="birthPlace"
                                                   v-validate="'required'"
                                                   @input="updateState">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">Adresa trvalého bydliska</h3>
                                                </div>

                                                <div class="panel-body">
                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.country') }">
                                                        <label for="country"
                                                               class="control-label">Krajina <b>*</b></label>

                                                        <select id="country"
                                                                name="country"
                                                                class="form-control"
                                                                required
                                                                aria-required="true"
                                                                v-validate="'required'"
                                                                @input="updateState">

                                                            <option v-for="country in countries"
                                                                    :value="country.value">{{ country.text }}
                                                            </option>
                                                        </select>
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.city') }">
                                                        <label for="city" class="control-label">Mesto <b>*</b></label>

                                                        <input id="city"
                                                               name="city"
                                                               class="form-control"
                                                               placeholder="Napíšte mesto"
                                                               required
                                                               aria-required="true"
                                                               :value="city"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.zip') }">
                                                        <label for="zip" class="control-label">PSČ <b>*</b></label>

                                                        <input id="zip"
                                                               name="zip"
                                                               class="form-control"
                                                               placeholder="Napíšte PSČ"
                                                               required
                                                               aria-required="true"
                                                               :value="zip"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.street') }">
                                                        <label for="street" class="control-label">Ulica <b>*</b></label>

                                                        <input id="street"
                                                               name="street"
                                                               class="form-control"
                                                               placeholder="Napíšte ulicu"
                                                               required
                                                               aria-required="true"
                                                               :value="street"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.streetNumber') }">
                                                        <label for="streetNumber"
                                                               class="control-label">Popisné číslo <b>*</b></label>

                                                        <input id="streetNumber"
                                                               name="streetNumber"
                                                               class="form-control"
                                                               placeholder="Napíšte popisné číslo"
                                                               required
                                                               aria-required="true"
                                                               :value="streetNumber"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">Kontakt</h3>
                                                </div>

                                                <div class="panel-body">
                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.email') }">
                                                        <label for="email" class="control-label">Email <b>*</b></label>

                                                        <input type="email"
                                                               id="email"
                                                               name="email"
                                                               class="form-control"
                                                               placeholder="Napíšte email"
                                                               required
                                                               aria-required="true"
                                                               :value="email"
                                                               v-validate="'required|email'"
                                                               @input="updateState">
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="phone">Telefónne číslo</label>

                                                        <input id="phone"
                                                               name="phone"
                                                               class="form-control"
                                                               placeholder="Napíšte telefónne číslo"
                                                               :value="phone"
                                                               @input="updateState">
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="mobile">Mobilné číslo</label>

                                                        <input id="mobile"
                                                               name="mobile"
                                                               class="form-control"
                                                               placeholder="Napíšte mobilné číslo"
                                                               :value="mobile"
                                                               @input="updateState">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <form class="panel panel-default" data-vv-scope="form-2">
                            <div class="panel-heading has-error" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed"
                                       @click="validateForm1"> Doplňujúce údaje o posudzovanej osobe
                                    </a>

                                    <label v-if="form2Error" class="control-label pull-right">Vyplňte prosím všetky povinné políčka</label>
                                </h4>
                            </div>

                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                 aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <div :class="{'form-group': true, 'has-error': errors.has('form-2.maritalStatus') }">
                                        <label for="maritalStatus" class="control-label">Rodinný stav <b>*</b></label>

                                        <select id="maritalStatus"
                                                name="maritalStatus"
                                                class="form-control"
                                                required
                                                aria-required="true"
                                                v-validate="'required'"
                                                @input="updateState">

                                            <option v-for="maritalStatus in maritalStatuses"
                                                    :value="maritalStatus.value">{{ maritalStatus.text }}
                                            </option>
                                        </select>
                                    </div>

                                    <div :class="{'form-group': true, 'has-error': errors.has('form-2.education') }">
                                        <label for="education" class="control-label">Vzdelanie <b>*</b></label>

                                        <select id="education"
                                                name="education"
                                                class="form-control"
                                                required
                                                aria-required="true"
                                                v-validate="'required'"
                                                @input="updateState">

                                            <option v-for="education in educations"
                                                    :value="education.value">{{ education.text }}
                                            </option>
                                        </select>
                                    </div>

                                    <div :class="{'form-group': true, 'has-error': errors.has('form-2.employmentStatus') }">
                                        <label for="employmentStatus" class="control-label">Zamestnanie <b>*</b></label>

                                        <select id="employmentStatus"
                                                name="employmentStatus"
                                                class="form-control"
                                                required
                                                aria-required="true"
                                                v-validate="'required'"
                                                @input="updateState">

                                            <option v-for="employmentStatus in employmentStatuses"
                                                    :value="employmentStatus.value">{{ employmentStatus.text }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="employmentType">Pracovno-právny vzťah</label>

                                        <select id="employmentType" class="form-control">
                                            <option v-for="employmentType in employmentTypes"
                                                    :value="employmentType.value">{{ employmentType.text }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a class="collapsed"
                                       @click="validateForm2">
                                        Základná diagnóza
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                                 aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <div class="form-group">
                                        <label for="diagnosisMkch10">Diagnóza podľa MKCH10</label>

                                        <textarea id="diagnosisMkch10"
                                                  name="diagnosisMkch10"
                                                  class="form-control"
                                                  @input="updateState"></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h5>Priznaná invalidita</h5>

                                            <input type="radio"
                                                   id="assigned_disability_none"
                                                   name="assignedDisability"
                                                   value="Žiadna"
                                                   class="form-check"
                                                   @change="updateState">

                                            <label for="assigned_disability_none">&nbsp;Žiadna</label>

                                            <br>

                                            <input type="radio"
                                                   id="assigned_disability_partial"
                                                   name="assignedDisability"
                                                   value="Čiastočná"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="assigned_disability_partial">Čiastočná</label>

                                            <br>

                                            <input type="radio"
                                                   id="assigned_disability_full"
                                                   name="assignedDisability"
                                                   value="Plná"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="assigned_disability_full">Plná</label>
                                        </div>

                                        <div class="col-md-4">
                                            <h5>Držiteľ preukazu ZŤP</h5>

                                            <input type="radio"
                                                   name="ztpHolder"
                                                   id="ztp_holder_yes"
                                                   value="Držiteľ preukazu ZŤP"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztp_holder_yes">Áno</label>

                                            <br>

                                            <input type="radio"
                                                   name="ztpHolder"
                                                   id="ztp_holder_no"
                                                   value=""
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztp_holder_no">Nie</label>
                                        </div>

                                        <div class="col-md-4">
                                            <h5>Držiteľ preukazu ZŤP/S</h5>

                                            <input type="radio"
                                                   name="ztpsHolder"
                                                   id="ztps_holder_yes"
                                                   value="Držiteľ preukazu ZŤP/S"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztps_holder_yes">Áno</label>

                                            <br>

                                            <input type="radio"
                                                   name="ztpsHolder"
                                                   id="ztps_holder_no"
                                                   value=""
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztps_holder_no">Nie</label>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="diagnosisBrief">Stručná anamnéza</label>

                                        <textarea id="diagnosisBrief"
                                                  name="diagnosisBrief"
                                                  class="form-control"
                                                  @input="updateState"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 well">

                <input type="button"
                       id="next-step"
                       class="btn btn-primary pull-right"
                       value="Ďalej"
                       @click="validateStep1">
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'step1',

    data () {
      return {
        formValid1: false,
        form1Error: false,
        form2Error: false
      }
    },

    computed: {
      ...mapState(
        [
          'academicDegree',
          'name',
          'surname',
          'academicDegreeAfter',
          'birthDate',
          'birthPlace',
          'country',
          'city',
          'zip',
          'street',
          'streetNumber',
          'email',
          'phone',
          'mobile',
          'maritalStatus',
          'education',
          'employmentStatus',
          'employmentType',
          'diagnosisMkch10',
          'assignedDisability',
          'ztpHolder',
          'ztpsHolder',
          'diagnosisBrief',
          'academicDegrees',
          'academicDegreesAfter',
          'countries',
          'maritalStatuses',
          'educations',
          'employmentStatuses',
          'employmentTypes'
        ])
    },

    methods: {
      updateState (e) {
        this.$store.commit('updateState', {
          id: e.target.name,
          value: e.target.value
        })
      },

      validateForm1 () {
        this.$validator.validateAll('form-1').then(result => {
          /* eslint-disable no-undef */
          if (result) {
            $('.collapse').collapse('hide')
            $('#collapseTwo').collapse('show')
            this.formValid1 = true
          } else {
            $('#collapseOne').collapse('show')
            this.formValid1 = false
          }
        })
      },

      validateForm2 () {
        if (!this.formValid1) {
          this.validateForm1()
        }

        if (this.formValid1) {
          this.$validator.validateAll('form-2').then(result => {
            /* eslint-disable no-undef */
            if (result) {
              $('.collapse').collapse('hide')
              $('#collapseThree').collapse('show')
            } else {
              $('#collapseTwo').collapse('show')
            }
          })
        }
      },

      validateStep1 () {
        this.$validator.validateAll('form-1').then(result => {
          if (!result) {
            this.form1Error = true
          } else {
            this.form1Error = false

            this.$validator.validateAll('form-2').then(result => {
              if (result) {
                this.$router.push('/step2')

                this.form2Error = false
              } else {
                this.form2Error = true
              }
            })
          }
        })
      }
    }
  }
</script>
