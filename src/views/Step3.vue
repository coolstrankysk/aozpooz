<template>
	<div id="app">
		<div class="container">
			<h1 class="text-center">{{ $t('icf_dial') }}</h1>

			<div class="col-md-12">
				<h2 class="text-center">{{ $t('step3.control_and_export') }}</h2>

				<div id="report">
					<div id="personal-data">
						<h3>{{ $t('step3.identification_data') }}</h3>

						<div>{{ academicDegree }} {{ name }} {{ surname }}, {{ academicDegreeAfter }} ({{ birthDate }}, {{ birthPlace }})</div>

						<div>
							<b>{{ $t('step3.permanent_address') }}:</b> {{ street }} {{ streetNumber }}, {{ zip }} {{ city }}, {{ country }}
						</div>

						<div>
							<b>{{ $t('step3.contact_information') }}:</b> {{ email }}<span v-if="phone">, {{ phone }}</span><span v-if="mobile">, {{ mobile }}</span>
						</div>

						<div>
							<b>{{ $t('step3.marital_status') }}:</b> {{ maritalStatus }}
						</div>

						<div>
							<b>{{ $t('step3.education') }}:</b> {{ education }}
						</div>

						<div>
							<b>{{ $t('step3.employment') }}:</b> {{ employmentStatus }}
						</div>

						<div>
							<b>{{ $t('step3.employment_type') }}:</b> {{ employmentType }}
						</div>

						<div>
							<b>{{ $t('step3.assigned_disability') }}:</b>

							{{ assignedDisability }}<span v-if="ztpHolder">, {{ ztpHolder }}</span><span v-if="ztpsHolder">, {{ ztpsHolder }}</span>
						</div>

						<div>
							<b>{{ $t('step3.diagnosis_mkch10') }}:</b> {{ diagnosisMkch10 }}
						</div>

						<div>
							<b>{{ $t('step3.diagnosis_brief') }}:</b> {{ diagnosisBrief }}
						</div>
					</div>

					<div class="evaluated" v-if="selectedComponents.length">
						<h3>{{ $t('step3.assessed_failures') }}</h3>

						<div v-for="selectedComponent in selectedComponents">
							{{ selectedComponent.scaleComponent.key }}.{{ selectedComponent.selectedScales[0].key }} -
							{{ selectedComponent.scaleComponent.component }} -
							<span v-for="(selectedScale, index) in selectedComponent.selectedScales">
							{{ selectedScale.value }}
						</span>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-12 well">
				<router-link to="/step2" class="btn btn-primary">
					{{ $t('back') }}
				</router-link>

				<input type="button"
					   id="next-step"
					   class="btn btn-primary pull-right"
					   :value="$t('step3.print')"
					   @click="print">
			</div>
		</div>

		<footer class="footer">
			<div class="container">
				Vytvorili
				<a href="http://www.coolstranky.sk/" target="_blank">
					<img class="coolstranky" src="http://www.coolstranky.sk/sites/default/files/logo_0.png" alt="CoolStránky">
				</a>
				a
				<a href="https://slovensko.digital/" target="_blank">
					<img class="slovenskodigital" src="https://slovensko.digital/img/logo/slovenskodigital-logo.svg" alt="Slovensko digital">
				</a>
			</div>
		</footer>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'step3',

  computed: {
    ...mapState(
      [
        'selectedComponents',
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
        'diagnosisBrief'
      ])
  },

  methods: {
    print () {
      window.print()
    }
  }
}
</script>

<style scoped>
	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 60px;
		line-height: 60px;
		background-color: #337ab7;
		color: #fff;
		font-weight: bold;
	}

	.footer img {
		margin: 10px;
	}

	.coolstranky {
		width: 120px;
	}

	.slovenskodigital {
		width: 140px;
	}
</style>
