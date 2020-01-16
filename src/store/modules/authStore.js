export default {
	state: {
		user: null,
	},
	getters: {
		user: state => {
			return state.user;
		},
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
		},
		unsetUser(state) {
			state.user = null;
		},
	},
	actions: {
		signIn({ commit }, payload) {
			commit('setUser', payload);
		},
	},
};
