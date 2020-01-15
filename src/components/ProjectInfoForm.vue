<template>
	<form class="ma-2">
		<v-text-field
			label="Name"
			v-model="form.name"
			:error-messages="nameErrors"
			@input="$v.form.name.$touch()"
			@blur="$v.form.name.$touch()"
			required
		></v-text-field>
		<v-text-field
			label="E-mail"
			v-model="form.email"
			:error-messages="emailErrors"
			@input="$v.form.email.$touch()"
			@blur="$v.form.email.$touch()"
			required
		></v-text-field>
		<v-select
			label="Category"
			v-model="form.category"
			:items="items"
			:error-messages="categoryErrors"
			@change="$v.form.category.$touch()"
			@blur="$v.form.category.$touch()"
			required
		></v-select>

		<v-btn @click="submit">submit</v-btn>
		<v-btn @click="clear">clear</v-btn>
	</form>
</template>

<script>
const { required, email } = require('vuelidate/lib/validators');

export default {
	validations: {
		form: {
			name: { required },
			email: { required, email },
			category: { required },
		},
	},
	data: () => ({
		form: {
			name: '',
			email: '',
			category: null,
		},
		items: ['Tech', 'Social', 'Movies'],
		checkbox: false,
	}),
	computed: {
		checkboxErrors() {
			const errors = [];
			if (!this.$v.form.checkbox.$dirty) return errors;
			!this.$v.form.checkbox.required && errors.push('You must agree to continue!');
			return errors;
		},
		categoryErrors() {
			const errors = [];
			if (!this.$v.form.category.$dirty) return errors;
			!this.$v.form.category.required && errors.push('Item is required');
			return errors;
		},
		nameErrors() {
			const errors = [];
			if (!this.$v.form.name.$dirty) return errors;
			// !this.$v.form.name.decimal && errors.push('Name must be a number')
			!this.$v.form.name.required && errors.push('Name is required.');
			return errors;
		},
		emailErrors() {
			const errors = [];
			if (!this.$v.form.email.$dirty) return errors;
			!this.$v.form.email.email && errors.push('Must be valid e-mail');
			!this.$v.form.email.required && errors.push('E-mail is required');
			return errors;
		},
	},

	methods: {
		submit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				this.$emit('projectInfoSubmited', this.form);
			}
		},
		clear() {
			this.$v.$reset();
			this.form.name = '';
			this.form.email = '';
			this.form.category = null;
			this.form.checkbox = false;
		},
	},
};
</script>
