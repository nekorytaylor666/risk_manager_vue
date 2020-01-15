<template>
	<v-stepper v-model="e1">
		<template>
			<v-progress-linear v-if="sending" indeterminate></v-progress-linear>
			<v-stepper-header>
				<template v-for="n in steps">
					<v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" :editable="false">
						Step {{ n }}
					</v-stepper-step>

					<v-divider v-if="n !== steps" :key="n"></v-divider>
				</template>
			</v-stepper-header>

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
import { db } from '@/firebase';

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
		async nextStep(n) {
			if (n === this.steps) {
				this.sending = true;
				const downloadUrl = await this.uploadFile(this.formData);
				this.formData.fileUrls.push(downloadUrl);
				await this.uploadData(this.formData);
				this.sending = false;
				this.$router.push({ name: 'home' });
			} else {
				this.e1 = n + 1;
			}
		},
		uploadData(projectData) {
			return db.collection('projects').add({
				name: projectData.name,
				category: projectData.category,
				email: projectData.email,
				files: projectData.fileUrls,
			});
		},
		async uploadFile(projectData) {
			await storage.ref(projectData.file.name).put(projectData.file);
			const url = await storage
				.ref()
				.child(this.formData.file.name)
				.getDownloadURL();
			return url;
		},
		confirmStep(event, current) {
			const data = event;
			this.formData = { ...this.formData, ...data };
			console.log(this.formData);
			this.nextStep(current);
		},
	},
};
</script>

<style lang="scss" scoped></style>
