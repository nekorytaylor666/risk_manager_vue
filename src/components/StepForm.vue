<template>
	<v-stepper v-model="e1">
		<template>
			<v-stepper-header>
				<template v-for="n in steps">
					<v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" :editable="editable">
						Step {{ n }}
					</v-stepper-step>

					<v-divider v-if="n !== steps" :key="n"></v-divider>
				</template>
			</v-stepper-header>

			<v-stepper-items>
				<v-stepper-content :step="1">
					<ProjectInfoForm></ProjectInfoForm>
				</v-stepper-content>
				<v-stepper-content :step="2">
					<v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

					<v-btn color="primary" @click="nextStep(2)">
						Continue
					</v-btn>

					<v-btn text>Cancel</v-btn>
				</v-stepper-content>
			</v-stepper-items>
		</template>
	</v-stepper>
</template>

<script>
import ProjectInfoForm from '@/components/ProjectInfoForm.vue';

export default {
	data() {
		return {
			e1: 1,
			steps: 2,
		};
	},
	components: {
		ProjectInfoForm,
	},
	methods: {
		nextStep(n) {
			if (n === this.steps) {
				alert('done');
			} else {
				this.e1 = n + 1;
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>
