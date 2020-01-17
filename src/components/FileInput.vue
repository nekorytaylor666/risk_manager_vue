<template>
	<div>
		<form novalidate class="md-layout" @submit.prevent="submitFile">
			<label>Add a document</label>
			<v-file-input
				label="File input"
				v-model="form.file"
				:error-messages="fileErrors"
				@input="$v.form.file.$touch()"
				@blur="$v.form.file.$touch()"
				required
			></v-file-input>
			<v-btn @click="submit">Submit</v-btn>
		</form>
	</div>
</template>

<script>
const { required } = require('vuelidate/lib/validators');

export default {
	validations: {
		form: {
			file: { required },
		},
	},
	data: () => ({
		form: {
			file: null,
		},
	}),
	computed: {
		fileErrors() {
			const errors = [];
			//if form doesnt have validation errors we return empty array or we return errors
			if (!this.$v.form.file.$dirty) return errors;
			!this.$v.form.file.required && errors.push('You must add file!');
			return errors;
		},
	},

	methods: {
		submit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				this.$emit('fileSubmited', this.form);
			}
		},
		clear() {
			this.$v.$reset();
			this.form.file = '';
		},
	},
};
</script>
<style lang="scss" scoped></style>
