<template>
	<div id="app">
		<h1 class="text-center">ICF číselník</h1>

		<div class="col-md-12">
			<h2 class="text-center">Kontrola a export</h2>

			<div id="report">
            	<div id="personal-data">
            		<h3>Identifikačné údaje</h3>

            		<div>{{ academicDegree }} {{ name }} {{ surname }}, {{ academicDegreeAfter }} ({{ birthDate }}, {{ birthPlace }})</div>

            		<div><b>Trvalé bydlisko:</b> {{ street }} {{ streetNumber }}, {{ zip }} {{ city }}, {{ country }}</div>

            		<div>
            			<b>Kontaktné údaje:</b> {{ email }}<span v-if="phone">, {{ phone }}</span><span v-if="mobile">, {{ mobile }}</span>
        			</div>

            		<div><b>Rodinný stav:</b> {{ maritalStatus }}</div>

            		<div><b>Vzdelanie:</b> {{ education }}</div>

            		<div><b>Zamestnanie:</b> {{ employmentStatus }}</div>

            		<div><b>Pracovno-právny vzťah:</b> {{ employmentType }}</div>

            		<div>
            			<b>Priznaná invalidita:</b>

            			{{ assignedDisability }}<span v-if="ztpHolder">, {{ ztpHolder }}</span><span v-if="ztpsHolder">, {{ ztpsHolder }}</span> 
            		</div>

            		<div><b>Diagnóza podľa MKCH10:</b> {{ diagnosisMkch10 }}</div>

            		<div><b>Stručná anamnéza:</b> {{ diagnosisBrief }}</div>
            	</div>

            	<div class="evaluated" v-if="selectedComponents.length">
            		<h3>Posúdené poruchy</h3>
            		
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
				Späť
			</router-link>

    		<input type="button" id="next-step" class="btn btn-primary pull-right" value="Tlačiť" @click="print">
		</div>
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