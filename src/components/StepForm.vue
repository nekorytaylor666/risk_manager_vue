<template>
	<v-stepper v-model="e1">
		<template>
			<v-stepper-header>
				<template v-for="n in steps">
					<v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" :editable="false">Step {{ n }}</v-stepper-step>
					<v-divider v-if="n !== steps" :key="n"></v-divider>
				</template>
			</v-stepper-header>
			<v-progress-linear v-if="sending" indeterminate></v-progress-linear>

			<v-stepper-items>
				<v-stepper-content :step="1">
					<ProjectInfoForm @projectInfoSubmited="confirmStep($event, 1)"></ProjectInfoForm>
				</v-stepper-content>
				<v-stepper-content :step="2">
					<FileInput @fileSubmited="confirmStep($event, 2)"></FileInput>
				</v-stepper-content>
			</v-stepper-items>
		</template>
	</v-stepper>
</template>

<script>
import ProjectInfoForm from '@/components/ProjectInfoForm.vue';
import FileInput from '@/components/FileInput.vue';
import { storage } from '@/firebase';
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			e1: 1,
			steps: 2,
			sending: false,
			formData: {
				fileUrls: [],
			},
		};
	},
	components: {
		ProjectInfoForm,
		FileInput,
	},
	methods: {
		...mapActions(['addProject']),
		async nextStep(n) {
			if (n === this.steps) {
				await this.submitFormDataToFirebase();
				this.$router.push({ name: 'home' });
			} else {
				this.e1 = n + 1;
			}
		},
		async submitFormDataToFirebase() {
			//for loading bar
			this.sending = true;
			//download url is the thing that you can reference to download file from firestorage
			const downloadUrl = await this.uploadFileGetUrl(this.formData);
			this.formData.fileUrls.push(downloadUrl);
			this.formData.createDate = new Date(Date.now());
			await this.addProject(this.formData);
			this.sending = false;
		},
		async uploadFileGetUrl(projectData) {
			await storage.ref(projectData.file.name).put(projectData.file);
			const url = await storage
				.ref()
				.child(this.formData.file.name)
				.getDownloadURL();
			return url;
		},
		confirmStep(event, current) {
			//merging form information with hole step form data
			const data = event;
			this.formData = { ...this.formData, ...data };
			this.nextStep(current);
		},
	},
};
</script>

<style lang="scss" scoped></style>
