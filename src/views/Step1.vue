<template>
    <div id="app">
        <h1 class="text-center">{{ $t('icf_dial') }}</h1>

        <div class="animated fadeIn">
            <div id="step1" class="row">
                <div class="col-md-12">
                    <h2 class="text-center">{{ $t('step1.identification_person') }}</h2>

                    <h3 class="text-center">{{ academicDegree }} {{ name }} {{ surname }} {{ academicDegreeAfter }}</h3>

                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"">
                        <form class="panel panel-default" data-vv-scope="form-1">
                            <div class="panel-heading has-error" role="tab" id="headingOne" @click="setStep(1)">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                       aria-expanded="true" aria-controls="collapseOne">
                                        {{ $t('step1.personal_information') }}
                                    </a>

                                    <label v-if="form1Error" class="control-label pull-right">{{ $t('step1.form_error') }}</label>
                                </h4>
                            </div>

                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                 aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <div class="form-group row">
                                        <div class="col-md-3">
                                            <label for="academicDegree">{{ $t('step1.academic_degree') }}</label>

                                            <select id="academicDegree"
                                                    name="academicDegree"
                                                    class="form-control"
                                                    @input="updateState">

                                                <option v-for="academicDegree in $t('step1.academic_degrees')"
                                                        :value="academicDegree.value">{{ academicDegree.text }}
                                                </option>
                                            </select>
                                        </div>

                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.name') }">
                                            <label for="name" class="control-label">{{ $t('step1.name')
                                                }} <b>*</b></label>

                                            <input id="name"
                                                   name="name"
                                                   type="text"
                                                   class="form-control"
                                                   :placeholder="$t('step1.name_placeholder')"
                                                   required
                                                   aria-required="true"
                                                   v-model="name"
                                                   v-validate="'required'"
                                                   @input="updateState">
                                        </div>

                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.surname') }">
                                            <label for="surname" class="control-label">{{ $t('step1.surname')
                                                }} <b>*</b></label>

                                            <input id="surname"
                                                   name="surname"
                                                   type="text"
                                                   class="form-control"
                                                   :placeholder="$t('step1.surname_placeholder')"
                                                   required
                                                   aria-required="true"
                                                   :value="surname"
                                                   v-validate="'required'"
                                                   @input="updateState">
                                        </div>

                                        <div class="col-md-3">
                                            <label for="academicDegreeAfter">{{ $t('step1.academic_degree_after')
                                                }}</label>

                                            <select id="academicDegreeAfter"
                                                    name="academicDegreeAfter"
                                                    class="form-control"
                                                    @input="updateState">

                                                <option v-for="academicDegreeAfter in $t('step1.academic_degrees_after')"
                                                        :value="academicDegreeAfter.value">{{ academicDegreeAfter.text
                                                    }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div :class="{'col-md-3': true, 'has-error': errors.has('form-1.birthDate') }">
                                            <label for="birthDate"
                                                   class="control-label">{{ $t('step1.birth_date') }} <b>*</b></label>

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
                                                   class="control-label">{{ $t('step1.birth_place') }} <b>*</b></label>

                                            <input type="text"
                                                   id="birthPlace"
                                                   name="birthPlace"
                                                   class="form-control"
                                                   :placeholder="$t('step1.birth_place_placeholder')"
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
                                                    <h3 class="panel-title">{{ $t('step1.permanent_address') }}</h3>
                                                </div>

                                                <div class="panel-body">
                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.country') }">
                                                        <label for="country"
                                                               class="control-label">{{ $t('step1.country') }} <b>*</b></label>

                                                        <select id="country"
                                                                name="country"
                                                                class="form-control"
                                                                required
                                                                aria-required="true"
                                                                v-validate="'required'"
                                                                @input="updateState">

                                                            <option v-for="country in $t('step1.countries')"
                                                                    :value="country.value">{{ country.text }}
                                                            </option>
                                                        </select>
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.city') }">
                                                        <label for="city" class="control-label">{{ $t('step1.city')
                                                            }} <b>*</b></label>

                                                        <input id="city"
                                                               name="city"
                                                               class="form-control"
                                                               :placeholder="$t('step1.city_placeholder')"
                                                               required
                                                               aria-required="true"
                                                               :value="city"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.zip') }">
                                                        <label for="zip" class="control-label">{{ $t('step1.zip') }} <b>*</b></label>

                                                        <input id="zip"
                                                               name="zip"
                                                               class="form-control"
                                                               :placeholder="$t('step1.zip_placeholder')"
                                                               required
                                                               aria-required="true"
                                                               :value="zip"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.street') }">
                                                        <label for="street" class="control-label">{{ $t('step1.address')
                                                            }} <b>*</b></label>

                                                        <input id="street"
                                                               name="street"
                                                               class="form-control"
                                                               :placeholder="$t('step1.address_placeholder')"
                                                               required
                                                               aria-required="true"
                                                               :value="street"
                                                               v-validate="'required'"
                                                               @input="updateState">
                                                    </div>

                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.streetNumber') }">
                                                        <label for="streetNumber"
                                                               class="control-label">{{ $t('step1.reference_number') }} <b>*</b></label>

                                                        <input id="streetNumber"
                                                               name="streetNumber"
                                                               class="form-control"
                                                               :placeholder="$t('step1.reference_number_placeholder')"
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
                                                    <h3 class="panel-title">{{ $t('step1.contact') }}</h3>
                                                </div>

                                                <div class="panel-body">
                                                    <div :class="{'form-group': true, 'has-error': errors.has('form-1.email') }">
                                                        <label for="email" class="control-label">{{ $t('step1.email')
                                                            }} <b>*</b></label>

                                                        <input type="email"
                                                               id="email"
                                                               name="email"
                                                               class="form-control"
                                                               :placeholder="$t('step1.email_placeholder')"
                                                               required
                                                               aria-required="true"
                                                               :value="email"
                                                               v-validate="'required|email'"
                                                               @input="updateState">
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="phone">{{ $t('step1.telephone_number') }}</label>

                                                        <input id="phone"
                                                               name="phone"
                                                               class="form-control"
                                                               :placeholder="$t('step1.telephone_number_placeholder')"
                                                               :value="phone"
                                                               @input="updateState">
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="mobile">{{ $t('step1.phone_number') }}</label>

                                                        <input id="mobile"
                                                               name="mobile"
                                                               class="form-control"
                                                               :placeholder="$t('step1.phone_number_placeholder')"
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
                                       @click="validateForm1(2)"> {{ $t('step1.additional_data') }}
                                    </a>

                                    <label v-if="form2Error" class="control-label pull-right">{{ $t('step1.form_error')
                                        }}</label>
                                </h4>
                            </div>

                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                 aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <div :class="{'form-group': true, 'has-error': errors.has('form-2.maritalStatus') }">
                                        <label for="maritalStatus" class="control-label">{{ $t('step1.marital_status')
                                            }} <b>*</b></label>

                                        <select id="maritalStatus"
                                                name="maritalStatus"
                                                class="form-control"
                                                required
                                                aria-required="true"
                                                v-validate="'required'"
                                                @input="updateState">

                                            <option v-for="maritalStatus in $t('step1.marital_statuses')"
                                                    :value="maritalStatus.value">{{ maritalStatus.text }}
                                            </option>
                                        </select>
                                    </div>

                                    <div :class="{'form-group': true, 'has-error': errors.has('form-2.education') }">
                                        <label for="education" class="control-label">{{ $t('step1.education')
                                            }} <b>*</b></label>

                                        <select id="education"
                                                name="education"
                                                class="form-control"
                                                required
                                                aria-required="true"
                                                v-validate="'required'"
                                                @input="updateState">

                                            <option v-for="education in $t('step1.educations')"
                                                    :value="education.value">{{ education.text }}
                                            </option>
                                        </select>
                                    </div>

                                    <div :class="{'form-group': true, 'has-error': errors.has('form-2.employmentStatus') }">
                                        <label for="employmentStatus"
                                               class="control-label">{{ $t('step1.employment_status')
                                            }} <b>*</b></label>

                                        <select id="employmentStatus"
                                                name="employmentStatus"
                                                class="form-control"
                                                required
                                                aria-required="true"
                                                v-validate="'required'"
                                                @input="updateState">

                                            <option v-for="employmentStatus in $t('step1.employment_statuses')"
                                                    :value="employmentStatus.value">{{ employmentStatus.text }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="employmentType">{{ $t('step1.employment_type') }}</label>

                                        <select id="employmentType" class="form-control">
                                            <option v-for="employmentType in $t('step1.employment_types')"
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
                                       @click="validateForm2(3)">
                                        {{ $t('step1.basic_diagnosis') }}
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                                 aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <div class="form-group">
                                        <label for="diagnosisMkch10">{{ $t('step1.diagnosis_mkch10') }}</label>

                                        <textarea id="diagnosisMkch10"
                                                  name="diagnosisMkch10"
                                                  class="form-control"
                                                  @input="updateState"></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h5>{{ $t('step1.assigned_disability') }}</h5>

                                            <input type="radio"
                                                   id="assigned_disability_none"
                                                   name="assignedDisability"
                                                   :value="$t('step1.assigned_disability_none')"
                                                   class="form-check"
                                                   @change="updateState">

                                            <label for="assigned_disability_none">&nbsp;{{ $t('step1.assigned_disability_none')
                                                }}</label>

                                            <br>

                                            <input type="radio"
                                                   id="assigned_disability_partial"
                                                   name="assignedDisability"
                                                   :value="$t('step1.assigned_disability_partial')"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="assigned_disability_partial">{{ $t('step1.assigned_disability_partial')
                                                }}</label>

                                            <br>

                                            <input type="radio"
                                                   id="assigned_disability_full"
                                                   name="assignedDisability"
                                                   :value="$t('step1.assigned_disability_full')"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="assigned_disability_full">{{ $t('step1.assigned_disability_full')
                                                }}</label>
                                        </div>

                                        <div class="col-md-4">
                                            <h5>{{ $t('step1.ztp_holder') }}</h5>

                                            <input type="radio"
                                                   name="ztpHolder"
                                                   id="ztp_holder_yes"
                                                   :value="$t('step1.ztp_holder')"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztp_holder_yes">{{ $t('step1.ztp_holder_yes') }}</label>

                                            <br>

                                            <input type="radio"
                                                   name="ztpHolder"
                                                   id="ztp_holder_no"
                                                   value=""
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztp_holder_no">{{ $t('step1.ztp_holder_no') }}</label>
                                        </div>

                                        <div class="col-md-4">
                                            <h5>{{ $t('step1.ztps_holder') }}</h5>

                                            <input type="radio"
                                                   name="ztpsHolder"
                                                   id="ztps_holder_yes"
                                                   :value="$t('step1.ztps_holder')"
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztps_holder_yes">{{ $t('step1.ztp_holder_yes') }}</label>

                                            <br>

                                            <input type="radio"
                                                   name="ztpsHolder"
                                                   id="ztps_holder_no"
                                                   value=""
                                                   class="form-check"
                                                   @change="updateState">&nbsp;

                                            <label for="ztps_holder_no">{{ $t('step1.ztps_holder_no') }}</label>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="diagnosisBrief">{{ $t('step1.diagnosis_brief') }}</label>

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
                       :value="$t('next')"
                       @click="nextStep">

                {{ step }}
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
        step: 1,
        formValid1: false,
        formValid2: false,
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
      nextStep () {
        if (this.step === 1) {
          console.log('step1')
          this.validateForm1()
        } else if (this.step === 2) {
          console.log('step2')
          this.validateForm2()
        } else if (this.step === 3) {
          console.log('step3')
          this.validateStep1()
        }
      },

      updateState (e) {
        this.$store.commit('updateState', {
          id: e.target.name,
          value: e.target.value
        })
      },

      setStep (index) {
        /* eslint-disable no-undef */
        $('.collapse').collapse('hide')
        $('#collapseOne').collapse('show')

        this.step = index
      },

      validateForm1 (index) {
        this.$validator.validateAll('form-1').then(result => {
          /* eslint-disable no-undef */
          if (result) {
            $('.collapse').collapse('hide')
            $('#collapseTwo').collapse('show')
            this.formValid1 = true
            this.form1Error = false

            if (index) {
              this.step = index
            } else {
              this.step++
            }
          } else {
            $('#collapseOne').collapse('show')
            this.formValid1 = false
            this.form1Error = true
          }
        })
      },

      validateForm2 (index) {
        if (!this.formValid1) {
          this.validateForm1()
        }

        if (this.formValid1) {
          this.$validator.validateAll('form-2').then(result => {
            /* eslint-disable no-undef */
            if (result) {
              $('.collapse').collapse('hide')
              $('#collapseThree').collapse('show')
              this.form2Error = false

              if (index) {
                this.step = index
              } else {
                this.step++
              }
            } else {
              $('#collapseTwo').collapse('show')
              this.form2Error = true
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
