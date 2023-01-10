import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/assets/css/main.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
require("./firebase");
Vue.config.productionTip = false;

import colors from "vuetify/lib/util/colors";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    store.dispatch("setEmail", user.email);
    store.dispatch("setSignedin", true);
    try {
      router.replace("home");
    } catch {}
  } else {
    // User is signed out
    store.dispatch("setSignedin", false);
    router.replace("logIn");
  }
});

new Vue({
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base, // #3F51B5
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
