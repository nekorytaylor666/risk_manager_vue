import Vue from "vue";
import Vuex from "vuex";

import projectStore from "./modules/projectStore";
import authStore from "./modules/authStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { projectStore: projectStore, authStore: authStore }
});
