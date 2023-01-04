import { FirebaseError } from "firebase/app";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false,
    dark: true,
    email: "",
  },
  getters: {
    isSignedin: (state) => {
      return state.signedIn;
    },
    isDark: (state) => {
      return state.dark;
    },
    getEmail: (state) => {
      return state.email;
    },
  },
  mutations: {},
  actions: {
    setSignedin: (context, signedIn) => {
      context.state.signedIn = signedIn;
    },
    darkTheme: (context, dark) => {
      context.state.dark = dark;
    },
    setEmail: (context, email) => {
      context.state.email = email;
    },
  },

  modules: {},
});
