<template>
  <div>
    <div class="d-flex">
      <div>
        <h1 class="ml-6 mt-12">Good evening {{ this.info.name }},</h1>
        <h4 class="ml-7 mt-2">What would you like to do today?</h4>
      </div>
      <v-spacer />
      <v-avatar justify="end" class="mt-12 mr-9" size="150" color="primary">
        <v-img src="@/assets/yusuf.jpg" to="/account"></v-img>
      </v-avatar>
    </div>

    <div>
      <v-card
        shaped
        width="auto"
        height="200px"
        class="ma-auto my-15 mx-4"
        to="/workouts"
      >
        <h2 class="ml-8 pt-7 font-weight-light">Start a workout</h2>
      </v-card>
      <v-card
        shaped
        width="auto"
        height="200px"
        class="ma-auto my-15 mx-4"
        to="/excercises"
      >
        <h2 class="ml-8 pt-7 font-weight-light">Browse Excercises</h2>
      </v-card>
      <v-card
        shaped
        width="auto"
        height="200px"
        class="ma-auto my-15 mx-4"
        to="/progress"
      >
        <h2 class="ml-8 pt-7 font-weight-light">Check Your progress</h2>
      </v-card>
    </div>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data: () => ({
    info: {},
  }),
  methods: {
    async getUserInfo() {
      let name = "Users/" + this.$store.getters.getEmail;
      console.log("name: " + name);
      const docRef = doc(db, name);
      const docSnap = await getDoc(docRef);
      console.log("X: ", docSnap.id);
      if (docSnap.exists()) {
        this.info = docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      console.log(this.info.name);
    },
  },
  mounted() {
    this.getUserInfo();
    console.log();
  },
  computed: {},
};
</script>
