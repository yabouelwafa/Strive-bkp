<template>
  <v-container>
    <v-card-title class="" align="center">My Workouts</v-card-title>
    <div
      v-for="workout of workouts"
      :key="workout.id"
      class="my-2"
      style="width: 100%; height: 80px"
    >
      <v-sheet outlined color="primary" rounded class="my-6">
        <v-card height="90px" block outlined color="" class="pa-6">
          <div class="d-flex flex-row">
            <v-text-field label="Workout name" v-model="name" />
            <v-btn class="ml-16 mt-1" @click="saveWorkout()">Save</v-btn>
          </div>
        </v-card>
      </v-sheet>
    </div>
    <v-btn class="mt-16" color="accent" rounded block @click="addWorkout()"
      >+</v-btn
    >

    <v-snackbar
      width="750px"
      color="primary"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data: () => ({
    //Snackbar
    snackbar: true,
    text: "Workout added",
    timeout: 1500,

    name: "",
    workouts: [],
  }),
  methods: {
    addWorkout() {
      this.workouts.push({
        id: "#" + this.workouts.length,
        x: "Workout-" + this.workouts.length,
      });
    },
    async saveWorkout() {
      if (this.name == "") {
        this.name = "Workout - " + this.workouts.length;
      }

      let email = this.$store.getters.getEmail;
      let collectionName = "Users/" + email + "/Workouts";

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, collectionName), {
        name: this.name,
      });
      console.log("Document written with ID: ", docRef.id);
      this.snackbar = true;
    },
  },
};
</script>
