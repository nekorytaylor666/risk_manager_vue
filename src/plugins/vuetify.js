import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#303F9F', // #E53935
				secondary: '#C5CAE9', // #FFCDD2
				accent: '#00BCD4', // #3F51B5
			},
		},
	},
});
