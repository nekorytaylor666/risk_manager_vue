import { db } from '../../firebase';

export default {
	state: { projects: [], currentProject: 'hello' },
	getters: {
		project: state => state.currentProject,
	},
	mutations: {
		addProject(state, payload) {
			state.projects.push(payload);
		},
		setProject(state, payload) {
			state.currentProject = payload;
		},
	},
	actions: {
		async addProject({ commit }, payload) {
			//sending data to firestore
			await db.collection('projects').add({
				name: payload.name,
				category: payload.category,
				email: payload.email,
				files: payload.fileUrls,
				createDate: payload.createDate,
			});
			commit('addProject', payload);
		},
	},
};
