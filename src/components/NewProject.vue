<template>
	<div>
		<form novalidate class="md-layout" @submit.prevent="validateUser">
			<md-content class="md-layout-item md-size-100">
				<md-card-header>
					<div class="md-title">Create project</div>
				</md-card-header>

				<md-card-content>
					<div class="md-layout md-gutter">
						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('projectName')">
								<label for="first-name">First Name</label>
								<md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.projectName" />
								<span class="md-error" v-if="!$v.form.projectName.required">The first name is required</span>
								<span class="md-error" v-else-if="!$v.form.projectName.minlength">Invalid first name</span>
							</md-field>
						</div>
					</div>
					<md-field :class="getValidationClass('email')">
						<label for="email">Email of CEO</label>
						<md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
						<span class="md-error" v-if="!$v.form.email.required">The email is required</span>
						<span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
					</md-field>

					<md-field :class="getValidationClass('projectCategory')">
						<label for="projectCategory">Category</label>
						<md-select v-model="form.projectCategory" name="projectCategory" id="projectCategory">
							<md-option value="tech">Tech</md-option>
							<md-option value="social">Social</md-option>
							<md-option value="food">Food</md-option>
						</md-select>
						<span class="md-error" v-if="!$v.form.projectCategory.required">The category is required</span>
					</md-field>
				</md-card-content>

				<md-card-actions>
					<md-button type="submit" class="md-primary">Create project</md-button>
				</md-card-actions>
			</md-content>
		</form>
	</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
	data: () => ({
		form: {
			projectName: null,
			email: null,
			projectCategory: null,
		},
	}),
	validations: {
		form: {
			projectName: {
				required,
				minLength: minLength(3),
			},
			email: {
				required,
				email,
			},
			projectCategory: {
				required,
			},
		},
	},
	methods: {
		getValidationClass(fieldName) {
			const field = this.$v.form[fieldName];

			if (field) {
				return {
					'md-invalid': field.$invalid && field.$dirty,
				};
			}
		},

		validateUser() {
			this.$v.$touch();

			if (!this.$v.$invalid) {
				this.$emit('projectCreated', this.form);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}
</style>
