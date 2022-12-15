import { FirebaseError } from "firebase/app";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false,
  },
  getters: {
    isSignedin: (state) => {
      return state.signedIn;
    },
  },
  mutations: {},
  actions: {
    setSignedin: (context, signedIn) => {
      context.state.signedIn = signedIn;
    },
  },
  modules: {},
});
